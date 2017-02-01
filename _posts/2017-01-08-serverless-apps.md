---
layout: post
title: Doin’ it Serverless
---

### Deploying to the ~~ Cloud ~~

Recently for the SFPC Showcase, I created the [Venmo Strips](http://danielgorelick.com/#venmobots){:target="_blank"} Comic Creator. For the installation it was suitable to run the web application locally, but now I want to deploy it. It is almost a static web app, except we need to make a server-side call to the public Venmo API to refresh the data. 

{: .center .large}
![cost estimates from the first week]({{ site.url}}/images/blog/deployed.png)

{: .media-caption}
Strip edited from [http://venmostrips.com](http://venmostrips.com){:target="blank"}

### AWS Central

One solution is to create an EC2 instance to host my webapp in its entirety. However running an instance (for even a computationally trivial app) can cost a bit – well, more than I want to spend. I decided to look into making it serverless to save costs, and learn some new AWS tools. 

The plan is to: 

- host all of the static files in a AWS S3 bucket

- create a AWS Lambda function to perform the server side jobs

- set up a cron job using AWS CloudWatch to run the Lambda function

### S3 Bucketing & Route 53

I've used S3 before, but this time I have to make sure to connect my Google Domain to the bucket. There are plenty of docs, and I was able to follow [this one](http://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html){:target="_blank"} to do that. 

### Setting up the Lambda function

Since I already created a standalone web application, I was able to use the code from my [Node server](https://github.com/dqgorelick/venmo-bots/blob/master/server.js){:target="_blank"} to create the lambda function. The one challenge was figuring out how to connect the Lambda function to the S3 bucket. I made sure to create the Lambda function in the same region as the bucket and crossed my fingers. 

The crux of the Lambda function is here: 

```
exports.handler = (event, context, callback) => {
  request(`https://venmo.com/api/v5/public?limit=${LIMIT}`, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      filterPayments(body, (filtered) => {
        var param = { Bucket: 'venmostrips.com', Key: 'feed.json', Body: filtered};
        s3.upload(param, function(err, data) {
          if (err) {
            console.log(err, err.stack);
          }
          context.done();
        });
      });
    }
  })
};
```

### Connecting it all together
The moment of truth came when testing the Lambda function. I used the AWS web tool to “Test” the function, and upon checking the S3 bucket– the data was sent! 

There was however, one hiccup. The file being sent `feed.json` was not being read properly from the client side. The GET request kept returning a 403 error. After a bit of time on Google / Stackoverflow I found that this was due to the lack of a bucket policy for `"Action": "s3:GetObject"`. After adding the policy, things worked! 

### Cron Jobing
Probably the most straight-forward part. Last but not least was setting up the cron job to continually update the data. After a google search I found the CloudWatch did exactly that. I was able to connect the Lambda function to the CloudWatch job, and have it run every 5 minutes. 

Boom boom, all done. 

### From $$$ to $ 
Instead of setting up an EC2 instance I was able to deploy my web app for very little.

{: .center .medium}
![cost estimates from the first week]({{ site.url}}/images/blog/aws_costs.png)

{: .media-caption}
Breakdown of costs on AWS

As long as my S3 doesn’t blow up, I should be alright with everything but S3-PUTs. Seems as though we won’t get away completely chalk free, but I’d say not bad.

All and all, not bad for a bootstrap solution! 

_fin_

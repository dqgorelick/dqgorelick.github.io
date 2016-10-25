---
layout: post
title: “Hacking” the public Venmo API
---

### How to get info from any (public) transaction on Venmo

Venmo is a popular payment app used by a lot of people (at least a lot of people I interact with). Whenever you pay someone venmo (by default) adds your transaction to the public feed. You can see the public feed within the native apps, as well as the website. On the main page of the website you can see this:

{: .center .medium}
![venmo image]({{ site.url }}/images/blog/venmo_public_view.png)

{: .media-caption}
There is a constant feed of venmo transactions on the venmo site (and app) - [source](https://venmo.com/){:target="_blank"}

This all began when I realized that venmo must have a public API. At first I was skeptical that this wasn't live data, so I investigated. Surely enough, it looks like venmo is loading the data dynamically. By opening the chrome dev console and going to the “Network” tab, the requests can be found:

{: .center .large}
![venmo image]({{ site.url }}/images/blog/venmo_network_activity.png)

{: .media-caption}
XHR calls being made to the public API

It appears the endpoint that’s being it is `https://venmo.com/api/v5/public`. This request returns 20 transactions that occured at the current UNIX timestamp. Success!

You can go to the endpoint and see the results yourself: [`https://venmo.com/api/v5/public`](https://venmo.com/api/v5/public){:target="_blank"}

This is cool, but what can we really do with 20 transactions, limited to the current UNIX timestamp? Let’s mess with the query params and see what happens.

### Messing with Query Params

Query parameters can be appended to the url to receive different data from the endpoint. On the screenshot above you can see that the query parameter `until` is added the the query made. Let's start there. The query made was `"http://venmo.com/api/v5/public?until=1477420066"`.

Most “coders” can recognize the number attached as a UNIX timestamp. The unix timestamp is the amount of seconds since January 1st 1980. It’s just an easier way to display numbers than MM/DD/YYYY or DD/MM/YYYY.

There is no published documentation on the public venmo API, but we can make some assumptions. Since there is an `until` query, we can assume there is something like a `since` or `from` query parameter. Let's try it out.

I use this site [http://www.epochconverter.com/](http://www.epochconverter.com/){:target="_blank"} to make all of my UNIX conversions. Eventually we will use some sort of library in our code so we don't have to resort to using this site.

For now though, let's try getting data from a certain time. I am going to try getting data from a week ago. The results from the site are as shown:
```
Epoch timestamp: 1476921600
Timestamp in milliseconds: 1476921600000
Human time (GMT): Thu, 20 Oct 2016 00:00:00 GMT
Human time (your time zone): 10/19/2016, 8:00:00 PM
```

This can be our `since` time. Let’s make our `until` time one minute in the future from this.

```
Epoch timestamp: 1476921660
Timestamp in milliseconds: 1476921660000
Human time (GMT): Thu, 20 Oct 2016 00:01:00 GMT
Human time (your time zone): 10/19/2016, 8:01:00 PM
```

We can take “Epoch timestamp” and append that to our query.

Our final query should look like this:
```
http://venmo.com/api/v5/public?since=1476921600&until=1476921660
```

We can chain as many query parameters as we want, and as you can see, each one is separated by an ampersand (`&`).

If we copy and paste the query into our browser we can see the result. I use a chrome extension called “JSONView” so it formats my JSON nicely. A snippet from the result:

{: .center .large}
![venmo image]({{ site.url }}/images/blog/venmo_test_query.png)

{: .media-caption}
Result from our test query.

### What are we looking at here?

It’s data! It looks like we have a list of transactions. There also seems to be paging so we can see more transactions. By using the search function, it is also aparent that there are only 20 transactions listed. Hmm I think we can do better. Let’s try adding the limit query parameter to try to increase the amount of transactions returned.

We are going to use the same query as before, but now let's append a limit parameter. Our final query looks like this: ```https://venmo.com/api/v5/public?since=1476921600&until=1476921660&limit=1000000```

We can see that there are not 1,000,000 results, but we did max-out the amount of results returned. It looks like in the minute from October 20th 12:00:00AM until October 20th 12:01:00:AM there were 471 transactions made on the service.

{: .center .large}
![venmo image]({{ site.url }}/images/blog/venmo_query_2.png)

{: .media-caption}
Result from our increased limit query.

This is great! We now have a method of gathering data from the public Venmo API. Some limitations we may run in to are that the Venmo servers may limit how fast we can fetch from the API (this is called “Throttling”), or they may limit how many requests we can make in a certain day. For now though, let's just run with it!

### Next up:

We want to now do something interesting with this data. I have a few ideas in mind. Some involve real-time displays of what transactions are being made. Others include gathering lots of data so that we can find interesting patterns in the historical data. My [last blogpost]({{ site.url }}/learning-neo4j-database/) talks about using the graph database Neo4J to store the data.

_fin_

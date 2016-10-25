---
layout: post
title: Hacking the public Venmo API (WIP)
---

### How to get info from any (public) transaction on Venmo

This all began when I realized that venmo had a public api. Within the app and the site you can see this:

{: .center .medium}
![venmo image]({{ site.url }}/images/blog/venmo_public_view.png)

{: .media-caption}
There is a constant feed of venmo transactions on the venmo site (and app) - [source](https://venmo.com/){:target="_blank"}

At first I was skeptical that this wasn't live data, so I investigated. Surely enough, it looks like venmo is loading the data dynamically. By opening the chrome dev console and going to the “Network” tab, the requests can be found:

{: .center .large}
![venmo image]({{ site.url }}/images/blog/venmo_network_activity.png)

{: .media-caption}
XHR calls being made to the public API

It appears the endpoint that’s being it is `https://venmo.com/api/v5/public`. This request returns 20 transactions that occured at the current UNIX timestamp. Success!

You can go to the endpoint and see the results yourself: [`https://venmo.com/api/v5/public`](https://venmo.com/api/v5/public){:target="_blank"}

This is cool, but what can we really do with 20 transactions, limited to the current UNIX timestamp? Let’s mess with the query params and see what happens.

### Messing with Query Params (to be continued)

_tbc_

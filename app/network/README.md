# 🌎 app/network

Houses functions that trigger network requests.

## Structure

Each type of operation should have its own file that exports functions. 

For example, if an api can supply a list of friends, information on a specific friend, a news feed and a notification feed, a sample structure in this folder (as well as exported functions within each file) would be:

```
Friends.js
 - getList()
 - getId(id: number)

NewsFeed.js
 - getFeed()

Notifications.js
 - getFeed()
```

The reason we do requests like this is that it allows us to abstract away the URLs, data processing, transforms, etc. This means that if something in the API changes, perhaps an endpoint URL or the structure of a response, it only needs to be changed in one place.

Also, having requests as callable functions means that it is easy to write tests to ensure API responses are being supplied in the correct format.
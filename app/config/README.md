# app/config

Will contain a lot of core functionality of the app, a few have been included, it is recommeded that you keep them here.

## Included files

### `api.js`

Imports `apisauce` and exports `api.create()` functions to be used elsewhere (most likely in files within `app/network`). 

When working with an api, say `https://dogfi.sh/api`, you should use the following:

```
export const DogfishAPI = api.create({
  baseUrl: 'https://dogfi.sh/api'
});
```

Then, if you were to call the endpoint `https://dogfi.sh/api/feed` with a get request, you can import the exported `DogfishAPI` like `DogfishAPI.get('/feed')`.

Plenty of other things can be done with apisauce, they are detailed at the [GitHub page](https://github.com/infinitered/apisauce).

### `store.js`

Where the Redux store comes together.

All reducers from the `app/redux` directory are imported, combined and the store is configured and created.

Redux middleware, such as the sample `screenTracking` should be put in this file too and included in `createStore`/`applyMiddleware`. Of course, if you make heavy use of many middleware functions, you may with to break these out into individual files somewhere else and import them here. Just make sure you document where and why you moved these functions so other devs can find them.

### `styles.js`

Hub for global style fragments and values.

Here, we store the color palette (exported as a const named `colors`), dimensions such as font sizes and margins (`sizes`) and, if applicable, fonts (`fonts`).

Also, we can place commonly used style fragments, such as `centerChildren`. These can be used elsewhere in the app by importing and using the ES6 spread syntax to add to the style object.

### `transforms.js`

If you need to run data such as an API response through a function to change some characteristics (for example, add a parameter to each object of an array), create the function that transforms the data here and import it where needed.

Can also be used to transform any data, such as the sample `slugify` function.

## Use Cases
- An `analytics.js` file that sets up a tracker exports an `event` function that will trigger analytics events.
- A `values.js` file that exports values such as API URLs, GA tracking codes, etc

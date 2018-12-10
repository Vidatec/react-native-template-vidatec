# 🗺 app/navigators

`react-navigation` navigators.

## `index.js`

This folder contains a main file that exports 3 singleton classes, `MainStack`, `MainTabs` and `NavigationTracker`.

`MainStack` and `MainTabs` are singletons that store references to their respective navigators. This means that any component in our app can import the singleton and control the navigation, so if you want to push a screen to the stack from a deep nested button, that's no problem. They have a common method: `navigate(routeName: string, params: {})` and each export other navigator specific methods, look into this file for more detail.

`NavigationTracker` is a class that stores the current state of our two navigators. Its `onNavigate` method is called whenever either of our navigators update their state. This class is useful for screen tracking and contains a sample screen tracking `console.log`. 

## Navigator Structure

Each navigator should be in a directory which contains a `config.js` and an `index.js`.

### `config.js`

Constructs the navigator from a routeConfiguration object and a navigatorConfiguration object. 

See sample navigators for code.

### `index.js`

Creates a class for the navigator and links it to a Redux namespace. Navigation should be routed through Redux in this template so that we can access nav state anywhere, and also detect nav state changed with a redux middleware.

Again, see sample navigators for code.

## Custom Navigation Schemes

This template contains one Stack and one Tab navigator. Ultimately, these are just React components so if you want to remove the Tabs, you just need to remove it as a screen in our Stack navigator and replace it with any other screen. 

To remove the stack navigator and leave only the Tab navigator is a bit more complicated. `MainStack` is our root component in `app/index.js`. Remove this and replace it with an imported `MainTabs` component.

### Adding a navigator checklist

* Create a navigator following the above structure.
* Create a singleton class in `app/navigators/index.js` so that the rest of your app can control it.
* Modify `NavigationTracker` to ensure it can store state for your new navigator and that it can successfull detect what screen a user is on.
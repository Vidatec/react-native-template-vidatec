# 🔌 app/components

The home for all the components you use in your app.
Aim to keep these as self contained as possible to maximise code reuse, but be careful as to not get too sucked into this. You may find yourself trying to make a component that is very bespoke to your app generic and wasting a lot of time.

## Structure

Create a folder for each component, include a `index.js` and `styles.js` file

### `index.js`

Create a class with the same name as your component that extends React's `component`. Give it a `static propTypes` object, detailing the props that the component expects.

If connecting the component to Redux, export the `connect` function as the default export. Otherwise, just export the class itself as default.

### `styles.js`

Export a `StyleSheet.create()` (import from react-native) function.

## Use Cases
- A `Button` component which contains a stylised, reuseable button.
- A `Header` component which contains your apps custom header bar.
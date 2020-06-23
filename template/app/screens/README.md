# 🖥 app/screens 

Screens that make up your app.

## Structure

Create a folder for each screen, include a `index.js` and `styles.js` file

### `index.js`

Very similar to component, a class that extends component and may export directly or thtough the `connect` function. See code examples.

A screen class may also include a `static navigationOptions` object (or function that exports an object). This is used by `react-navigation`, [docs on their site](https://reactnavigation.org/docs/navigators/navigation-options).

### `styles.js`

Again, basically identical to components. Essentially just an exported stylesheet that the `index.js` file imports and uses.
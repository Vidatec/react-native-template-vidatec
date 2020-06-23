# 🗂 app/redux

JS files that house Redux types, actions and reducers for each namespace in the global store.

Roughly subscribes to the [Redux Ducks methodology](https://github.com/erikras/ducks-modular-redux).

## Structure

Each file should correspond to a namespace in the Redux store.

### Types

```
export const UPDATE_TIME = 'TestData/UPDATE_TIME';
```

A string const that allows the case statement in the reducer to accurately determine what action dispatched.

### Actions

```
export function updateTime () {
  // get a timestamp and pass it to the reducer
  return {
    type: UPDATE_TIME,
    timestamp: new Date().getTime()
  };
}
```

A function that can be bound to a component and called to trigger a Redux state update.

Actions can return a plain object or, if an async dispatch is needed, a function thanks to [Redux Thunk](https://github.com/gaearon/redux-thunk).

```
export function updateTimeAsync (delay: number = 2000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(updateTime());
    }, delay);
  };
}
```

### Reducer
The function that Redux actions get piped through. Use a case statement on the action type to work out what to do.

You can see an example in `app/redux/TestData.js`
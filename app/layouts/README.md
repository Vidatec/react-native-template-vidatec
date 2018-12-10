# 🍱 app/layouts

Essentially, common layouts that are turned into components.

## Structure

Should be the same as components, but each layout should incorporate `this.props.children` so that it can be used as a wrapper.

## Use Cases

- A `FullWithHeader` layout that includes a `Header` component at the top of the page and wraps the components children in a full page flex container.
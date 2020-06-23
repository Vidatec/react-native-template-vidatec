[![npm version](https://badge.fury.io/js/react-native-template-vidatec.svg)](https://badge.fury.io/js/react-native-template-vidatec)
[![npm downloads](https://img.shields.io/npm/dt/react-native-template-vidatec.svg)](https://www.npmjs.com/package/react-native-template-vidatec)
![](https://img.shields.io/github/issues-raw/vidatec/react-native-template-vidatec.svg)
![](https://img.shields.io/github/last-commit/vidatec/react-native-template-vidatec.svg)
![](https://img.shields.io/github/languages/top/vidatec/react-native-template-vidatec.svg)
![](https://img.shields.io/npm/l/react-native-template-vidatec.svg)


# `react-native-template-vidatec`

```
npx react-native init NewApp --template=vidatec && cd NewApp
```

Instructions in `app/*` directories.

## Storybook
This template uses storybook to edit components. 

To use storybook go to `./index.js` and comment out the line 

`import Root from './app/index';` 

and uncomment 

`import Root from './storybook';` 

Save and reload your app to see the storybook view of the components. 

## Filament support

This repository supports Filament CLI when using the `filament-rnvidatec` package. Currently this repository is set to use `filament-rnvidatec`. The template installs the CLI and the package, and the `setup.js` script links it in the `package.json` file.

You'll be able to use filament commands to generate screens, components, network  and redux controllers:

- `npx filament new component <componentName>`
- `npx filament new screen <screenName>`
- `npx filament new network <networkControllerName>`
- `npx filament new redux <reduxName>`

# Testing and Linting

### Testing is provided via Jest. 

`npm run test`        This will run jest in verbose mode. 

`npm run test_clear`  This will clear the jest cache.

`npm run test_update` This will update any snapshots you have used.

Tests are stored in `./__tests__`. Jest matches on `*.test.js` this is because detox matches on the *.spec.js and confusions and errors will arise if they are not separate. 

A sample working test exists so run `npm run test` to see it in action.

### Linting is provided by Eslint

`npm run lint` will run the command `eslint *.js ./ --fix`.

# Thanks

Built on top of Andrew M + Jordan D's templates.

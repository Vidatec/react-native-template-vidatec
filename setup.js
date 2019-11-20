const fs = require('fs');
const path = require('path');
let json = require('./package.json');

let { scripts, name } = json;

const writeFile = (fileName, data) => fs.writeFileSync(path.join(__dirname, fileName), data);
const deleteFile = fileName => fs.unlinkSync(path.join(__dirname, fileName), err => { 
  if (err) console.log(`Could not delete ${fileName}` )
});

console.log('\n\nSetting up package.json')
console.log('Adding missing scripts...');
scripts.storybook = 'storybook start';
scripts.test = 'jest --verbose';
scripts.test_update = 'jest -u';
scripts.test_clear = 'jest --clearCache';
scripts.lint = 'eslint *.js ./ --fix';

json.scripts = scripts;

console.log('Adding filament support...')
json.config = {
  'filament': {
    'package': '@vidatec/filament-rnvidatec'
  }
};

console.log('Setting jest...');
// this sets the transform and the testMatch so that it doesn't interfere with detox
json.jest = {
  'preset': 'react-native',
  'transform': {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
  },
  'testMatch': [
    '<rootDir>/__tests__/**/*.test.js?(x)',
    '<rootDir>/app/**/*.test.js'
  ]
};

console.log('Setting rnpm...');
json.rnpm = {
  'assets': [
    'app/assets/fonts'
  ]
};

console.log('Writing to package.json...')
writeFile('package.json', JSON.stringify(json, null, 2));

console.log('Removing setup files...')
deleteFile('LICENSE')
deleteFile('setup.js');

console.log('Setup completed!');

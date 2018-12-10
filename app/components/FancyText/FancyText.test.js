/*
 * app/components/FancyText/FancyText.test.js
 */

import React from 'react';
import renderer from 'react-test-renderer';

import FancyText from '.';

it('renders correctly with no props', () => {
  const tree = renderer.create(<FancyText />).toJSON();
  expect(tree).toMatchSnapshot();
});

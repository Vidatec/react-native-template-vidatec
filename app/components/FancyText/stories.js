/*
 * app/components/FancyText/stories.js
 */

import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import FancyText from '.';

storiesOf('FancyText', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .add('no props', () => (
    <FancyText />
  ));
/* eslint-disable */

import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {TextField} from './TextField';
import {View} from 'react-native';
import tw from '../../../lib/tailwind';

storiesOf('TextField', module)
  .addDecorator(getStory => (
    <View style={tw`flex-1 items-center justify-center`}>{getStory()}</View>
  ))
  .add('Normal', () => (
    <View>
      <TextField
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        placeholder="Placeholder"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        defaultValue="Input"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        defaultValue="Password"
        secureTextEntry={true}
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
    </View>
  ))
  .add('Normal With Label', () => (
    <View>
      <TextField
        label="Label"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        label="Label"
        placeholder="Placeholder"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        label="Label"
        defaultValue="Input"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        label="Label"
        defaultValue="Password"
        secureTextEntry={true}
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
    </View>
  ))
  .add('Error', () => (
    <View>
      <TextField
        isValid={false}
        errorMessage="Error Message"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        isValid={false}
        errorMessage="Error Message"
        placeholder="Placeholder"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        isValid={false}
        errorMessage="Error Message"
        defaultValue="Input"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        isValid={false}
        errorMessage="Error Message"
        defaultValue="Password"
        secureTextEntry={true}
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
    </View>
  ))
  .add('Error With Label', () => (
    <View>
      <TextField
        isValid={false}
        errorMessage="Error Message"
        label="Label"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        isValid={false}
        errorMessage="Error Message"
        label="Label"
        placeholder="Placeholder"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        isValid={false}
        errorMessage="Error Message"
        label="Label"
        defaultValue="Input"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        isValid={false}
        errorMessage="Error Message"
        label="Label"
        defaultValue="Password"
        secureTextEntry={true}
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
    </View>
  ))
  .add('Disabled', () => (
    <View>
      <TextField
        disabled
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        disabled
        placeholder="Placeholder"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        disabled
        defaultValue="Input"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        disabled
        defaultValue="Password"
        secureTextEntry={true}
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
    </View>
  ))
  .add('Disabled With Label', () => (
    <View>
      <TextField
        disabled
        label="Label"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        disabled
        label="Label"
        placeholder="Placeholder"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        disabled
        label="Label"
        defaultValue="Input"
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
      <TextField
        disabled
        label="Label"
        defaultValue="Password"
        secureTextEntry={true}
        containerStyle={{
          width: 300,
          marginBottom: 20,
        }}
      />
    </View>
  ));

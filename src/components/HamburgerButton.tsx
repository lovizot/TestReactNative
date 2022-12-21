import React from 'react';
import {TouchableOpacity, View} from 'react-native';

interface HamburgerButtonProps {
  onPress: () => void;
}

const HamburgerButton = ({onPress}: HamburgerButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: 48,
          height: 48,
          padding: 12,
          justifyContent: 'space-around',
          alignItems: 'stretch',
        }}>
        <View
          style={{
            backgroundColor: 'lightgray',
            height: 2,
          }}></View>
        <View
          style={{
            backgroundColor: 'lightgray',
            height: 2,
          }}></View>
        <View
          style={{
            backgroundColor: 'lightgray',
            height: 2,
          }}></View>
      </View>
    </TouchableOpacity>
  );
};

export default HamburgerButton;

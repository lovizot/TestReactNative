import React from 'react';
import HamburgerButton from './HamburgerButton';
import {Text, View} from 'react-native';

interface HeaderProps {
  title: string;
  onOpenMenu: () => void;
}

const Header = ({title, onOpenMenu}: HeaderProps) => {
  return (
    <View
      style={{
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <HamburgerButton onPress={onOpenMenu} />
      <Text
        style={{
          marginLeft: 16,
          textTransform: 'uppercase',
          color: 'rgba(0,0,0, .4)',
          letterSpacing: 4,
          fontSize: 18,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

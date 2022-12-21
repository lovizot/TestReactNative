import React from 'react';
import {Text, View} from 'react-native';

interface HomeProps {}

const HomeScreen = (props: HomeProps) => {
  return (
    <View>
      <Text>My Home Screen</Text>
    </View>
  );
};

HomeScreen.propTypes = {};

export default HomeScreen;

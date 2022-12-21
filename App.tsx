/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback, useRef, useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './src/components/Header';
import {drawerItems, NavItem} from './src/constants';

const App = () => {
  const scaleMenuRef = useRef(new Animated.Value(1)).current;
  const offsetValueRef = useRef(new Animated.Value(0)).current;
  const rotationRef = useRef(new Animated.Value(0)).current;
  const rotateInterpolated = rotationRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-5deg'],
  });
  const offsetAppValueRef = useRef(new Animated.Value(0)).current;

  const [currentNav, setCurrentNav] = useState<number>(0);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const handleOpenDrawer = useCallback(() => {
    Animated.timing(scaleMenuRef, {
      toValue: menuVisible ? 1 : 0.88,
      duration: 400,
      useNativeDriver: true,
    }).start();
    Animated.timing(offsetValueRef, {
      toValue: menuVisible ? 0 : 220,
      duration: 400,
      useNativeDriver: true,
    }).start();
    Animated.timing(rotationRef, {
      toValue: menuVisible ? 0 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
    Animated.timing(offsetAppValueRef, {
      toValue: menuVisible ? -20 : 20,
      duration: 400,
      useNativeDriver: true,
    }).start();
    setMenuVisible(!menuVisible);
  }, [
    menuVisible,
    offsetValueRef,
    rotationRef,
    scaleMenuRef,
    offsetAppValueRef,
  ]);

  const handleCloseMenu = useCallback(
    (index: number) => {
      setCurrentNav(index);
      handleOpenDrawer();
    },
    [handleOpenDrawer],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          flexGrow: 1,
          transform: [
            {
              translateY: offsetAppValueRef,
            },
          ],
        }}>
        <Animated.View
          style={{
            padding: 12,
            borderRadius: 20,
            flex: 1,
            flexGrow: 1,
            backgroundColor: '#100226',
          }}>
          <View>
            <View
              style={{
                maxWidth: 160,
                alignItems: 'center',
                marginTop: 48,
                marginBottom: 32,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '900',
                  fontSize: 18,
                }}>
                Beka
              </Text>
            </View>
            <>
              {drawerItems.map((item: NavItem, index: number) => (
                <DrawerItem
                  index={index}
                  navItem={item}
                  key={item.id}
                  active={currentNav === index}
                  onPress={handleCloseMenu}
                />
              ))}
            </>
            <View
              style={{
                marginVertical: 16,
                marginBottom: 24,
                maxWidth: 160,
                height: 1,
                backgroundColor: 'rgba(255, 255, 255, .4)',
              }}
            />

            <DrawerItem
              index={drawerItems.length}
              navItem={{
                label: 'Sign Out',
                id: '-1',
                route: () => {},
              }}
              key={drawerItems.length + 1}
              active={currentNav === drawerItems.length}
              onPress={handleCloseMenu}
            />
          </View>
        </Animated.View>
        <Animated.View
          style={{
            borderRadius: 20,
            flexGrow: 1,
            backgroundColor: 'white',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            transform: [
              {
                scale: scaleMenuRef,
              },
              {
                translateX: offsetValueRef,
              },
              {
                rotate: rotateInterpolated,
              },
            ],
          }}>
          <Header
            title={drawerItems[currentNav].label}
            onOpenMenu={handleOpenDrawer}
          />
          <View
            style={{
              padding: 16,
            }}>
            <Text
              style={{
                letterSpacing: 1.5,
                color: 'gray',
              }}>
              Here is supposed to have the content
            </Text>
          </View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

interface DrawerItemProps {
  navItem: NavItem;
  active: boolean;
  onPress: (value: number) => void;
  index: number;
}

const DrawerItem = ({navItem, active, index, onPress}: DrawerItemProps) => {
  const handleOnPress = useCallback(() => {
    onPress(index);
  }, [index, onPress]);
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View
        style={{
          maxWidth: 160,
          borderRadius: 12,
          backgroundColor: active ? 'rgba(206,29,92,0.26)' : 'transparent',
          padding: 16,
          marginBottom: 12,
        }}>
        <Text
          style={{
            color: active ? 'rgb(255,92,92)' : 'white',
          }}>
          {navItem.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;

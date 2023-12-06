/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  StyleSheet
} from 'react-native';

import Test from './Test';
import Drawer from './Drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Header from './Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

function TabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#FAFAFA',
          elevation: 1,
          borderBottomWidth: 0,
          shadowOpacity: 0.1,
          shadowRadius: 0,
          shadowOffset: {
            width: 0,
            height: 1
          },
          paddingTop: insets.top
        },
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        swipeEnabled: true,
        scrollEnabled: true,
        labelStyle: [
          { textAlignVertical: 'top', paddingBottom: 5 }
        ],
        accessible: false,
        tabStyle: { width: Dimensions.get('window').width / 2, height: 60 }
      }}>
      <Tab.Screen name="Tab1" component={Test} options={{
        tabBarAccessibilityLabel: 'Tab1',
        tabBarLabel: 'Tab1'
      }} />
      <Tab.Screen name="Cards" component={Test} options={{
        tabBarAccessibilityLabel: 'Tab2',
        tabBarLabel: 'Tab2'
      }} />
    </Tab.Navigator>
  );
}

function TabNoPaddingNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#FAFAFA',
          elevation: 1,
          borderBottomWidth: 0,
          shadowOpacity: 0.1,
          shadowRadius: 0,
          shadowOffset: {
            width: 0,
            height: 1
          }
        },
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        swipeEnabled: true,
        scrollEnabled: true,
        labelStyle: [
          { textAlignVertical: 'top', paddingBottom: 5 }
        ],
        accessible: false,
        tabStyle: { width: Dimensions.get('window').width / 2, height: 60 }
      }}>
      <Tab.Screen name="Tab1" component={Test} options={{
        tabBarAccessibilityLabel: 'Tab1',
        tabBarLabel: 'Tab1'
      }} />
      <Tab.Screen name="Cards" component={Test} options={{
        tabBarAccessibilityLabel: 'Tab2',
        tabBarLabel: 'Tab2'
      }} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function HeaderNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HeaderPage"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="HeaderPage"
        component={Test}
        options={{
          header: (props) => <Header {...props} />,
          ...TransitionPresets.SlideFromRightIOS
        }}
      />
    </Stack.Navigator>
  );
}

function HeaderAndTabNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HeaderAndTabPage"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="HeaderAndTabPage"
        component={TabNoPaddingNavigator}
        options={{
          header: (props) => <Header {...props} />,
          ...TransitionPresets.SlideFromRightIOS
        }}
      />
    </Stack.Navigator>
  );
}

const DrawerItem = createDrawerNavigator();

function AppNavigation() {
  return (
    <DrawerItem.Navigator
      drawerStyle={{ width: '80%' }}
      drawerContent={(props) => <Drawer {...props} />}
      options={{
        headerShown: false
      }}
    >
      <DrawerItem.Screen name="HeaderPage" component={HeaderNavigator} options={{ headerShown: false }} />
      <DrawerItem.Screen name="TabPage" component={TabNavigator} options={{ headerShown: false }} />
      <DrawerItem.Screen name="NoHeaderPage" component={Test} options={{ headerShown: false }} />
      <DrawerItem.Screen name="HeaderAndTabPage" component={HeaderAndTabNavigator} options={{ headerShown: false }} />
    </DrawerItem.Navigator>
  );
}

const MainStack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>

<MainStack.Navigator
          initialRouteName="App"
          screenOptions={{ gestureEnabled: false }}
          headerMode='none'
        >
        <MainStack.Screen
          name="App"
          component={AppNavigation}
        />
          </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

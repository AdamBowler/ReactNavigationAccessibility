import React, { Component } from 'react';
import { StatusBar, StyleSheet, Platform, View, Text } from 'react-native';
import DrawerButton from './DrawerButton'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Header(props) {
  const insets = useSafeAreaInsets();
  return (
    <View accessible={false} style={{ paddingTop: insets.top, backgroundColor:'#FAFAFA' }}>
      <View accessible={false} style={styles.header} >
        <View accessible={false} style={styles.left}>
          <DrawerButton navigation={props.navigation} />
        </View>
        <View accessible={false} style={styles.body}>
          <Text>
            {props.route.name}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    elevation: 1,
    height: 70,
    borderBottomWidth: 0,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1
    },
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  right: {
    flex: 1
  },
  body: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 15
  }
})

export default Header
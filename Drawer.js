import React from 'react'
import { Text, View, StyleSheet, ScrollView, Linking, Image, Button } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Drawer = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation()

  return (
    <View style={[styles.container, { paddingTop: insets.top}]}>

      <Button title='Header Page' onPress={() => navigation.navigate('HeaderPage')}/>
      <Button title='Tab Page' onPress={() => navigation.navigate('TabPage')}/>
      <Button title='No Header Page' onPress={() => navigation.navigate('NoHeaderPage')}/>
      <Button title='Header and Tab Page' onPress={() => navigation.navigate('HeaderAndTabPage')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  menuContainer: {
    width: '100%',
    flex: 1
  }
})


export default Drawer;

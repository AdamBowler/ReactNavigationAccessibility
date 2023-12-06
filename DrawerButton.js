import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerButton() {
  const navigation = useNavigation()

  function toggleDrawer() {
    navigation.toggleDrawer();
  };

  return (
    <View containerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity accessibilityLabel={"main menu button"}  onPress={toggleDrawer.bind(this)} >
        <Icon name={'menu'} style={{ alignSelf: 'center' }} size={26} />
      </TouchableOpacity>
    </View>
  );
}

export default DrawerButton;
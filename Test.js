import React from 'react'

import { View, Text } from 'react-native'

export const Test = () => {
    return (
      <View accessible={false} style={{ flex: 1, paddingVertical: 100, backgroundColor:'#FFFFFF' }}>
        <View accessible={false} style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }} >
          <Text accessibilityLabel='TextHere'>Text</Text>
          <Text accessibilityLabel='OtherText'>Other Text</Text>
        </View>
      </View>
    );
}

export default Test
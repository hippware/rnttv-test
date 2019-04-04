import React from 'react'
import MainView from './MainView'
import BottomView from './BottomView'
import {View} from 'react-native'

export default () => (
  <View style={{flex: 1}}>
    <MainView />
    <View
      pointerEvents="box-none"
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <BottomView />
    </View>
  </View>
)

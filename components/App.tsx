import React from 'react'
import MainView from './MainView'
import BottomView from './BottomView'
import {View} from 'react-native'
import AnimatedPushComponent from './AnimatedPushComponent'

export default () => (
  <View style={{flex: 1}}>
    <MainView />
    <AnimatedPushComponent>
      <BottomView />
    </AnimatedPushComponent>
  </View>
)

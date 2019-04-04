import React from 'react'
import {Transitioner} from 'react-navigation-stack'
import {View} from 'react-native'
import AnimatedPushScene from './AnimatedPushScene'

type Props = {
  navigation: any
  navigationConfig: any
  descriptors: any
  screenProps: any
}

export default class SplitRenderer extends React.Component<Props> {
  _renderScene = (transitionProps, scene) => {
    const {
      index,
      descriptor: {navigation, getComponent},
    } = scene
    if (index === 0) {
      const Scene = getComponent()
      return (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          key={'0'}
        >
          <Scene navigation={navigation} />
        </View>
      )
    } else {
      return (
        <AnimatedPushScene transitionProps={transitionProps} scene={scene} key={scene.route.key} />
      )
    }
  }

  _render = transitionProps => {
    const scenes = transitionProps.scenes.map(scene => this._renderScene(transitionProps, scene))
    return <View style={{flex: 1}}>{scenes}</View>
  }
  render() {
    return (
      <Transitioner
        screenProps={this.props.screenProps}
        descriptors={this.props.descriptors}
        navigation={this.props.navigation}
        render={this._render}
      />
    )
  }
}

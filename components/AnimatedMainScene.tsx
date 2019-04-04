import React from 'react'
import {Animated, Dimensions} from 'react-native'
// import {height} from '../Global'

type Props = {
  scene: any
  transitionProps: any
}

class AnimatedMainScene extends React.Component<Props> {
  state = {
    yOffset: new Animated.Value(0),
  }

  componentWillReceiveProps(nextProps) {
    const {
      index,
      scene: {
        route: {
          params: {fromTop},
        },
      },
    } = nextProps.transitionProps
    if (index > 0 && !fromTop && !this.isOffset) {
      // shift the scene up 150
      this.slideSceneTo(-150)
    } else if ((fromTop || index === 0) && this.isOffset) {
      this.slideSceneTo(0)
    }
  }

  slideSceneTo = toHeight => {
    Animated.spring(this.state.yOffset, {
      toValue: toHeight,
      useNativeDriver: true,
    }).start()
  }

  render() {
    const {scene} = this.props
    const {navigation, getComponent} = scene.descriptor
    const Scene = getComponent()
    const {width: dWidth, height: dHeight} = Dimensions.get('window')
    return (
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: dHeight,
          transform: [
            {
              translateY: this.state.yOffset,
            },
          ],
        }}
      >
        <Scene navigation={navigation} />
      </Animated.View>
    )
  }
}

export default AnimatedMainScene

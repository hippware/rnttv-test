import React from 'react'
import {Animated, Dimensions} from 'react-native'

type Props = {}

const {height} = Dimensions.get('window')

class AnimatedPushScene extends React.Component<Props> {
  viewHeight: number = height - 500
  animating = false
  slideHeight = new Animated.Value(height) // initialize to full screen height

  componentDidMount() {
    this.slideHeight.setValue(this.viewHeight)
    this.showScene()
  }

  showScene = () => this.slideSceneTo(0)

  hideScene = () => this.slideSceneTo(this.viewHeight)

  slideSceneTo = offset => {
    if (this.animating) return
    this.animating = true
    Animated.spring(this.slideHeight, {
      toValue: offset,
      useNativeDriver: true,
    }).start(() => (this.animating = false))
  }

  render() {
    return (
      <Animated.View
        pointerEvents="box-none"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          transform: [
            {
              translateY: this.slideHeight,
            },
          ],
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}

export default AnimatedPushScene

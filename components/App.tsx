import React, {useState} from 'react'
import BottomView1 from './BottomView1'
import BottomView2 from './BottomView2'
import {View, TouchableOpacity} from 'react-native'

export default () => {
  const defaultColor = 'lightblue'
  const [color, setColor] = useState(defaultColor)

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: color,
        }}
      >
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
          }}
          onPressIn={() => setColor(color === defaultColor ? 'white' : defaultColor)}
        />
      </View>
      <View
        pointerEvents="box-none"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <BottomView1 />
        {color !== defaultColor && <BottomView2 />}
      </View>
    </View>
  )
}

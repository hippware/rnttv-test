import React, {useState} from 'react'
import {View, TouchableOpacity} from 'react-native'

export default ({params}) => {
  const defaultColor = 'lightblue'
  const [color, setColor] = useState(defaultColor)

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
  )
}

import React, {useState, useEffect} from 'react'
import {Text, View} from 'react-native'
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler'
import {Actions} from 'react-native-router-flux'

const defaultColor = 'lightblue'

const Map = ({params}) => {
  const [color, setColor] = useState(defaultColor)
  useEffect(() => {
    Actions.friends()
  }, []) // Only re-run the effect if count changes
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
      // onPressIn={() => setColor('white')}
    >
      <TouchableOpacity
        style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1}}
        onPress={() => setColor(color === defaultColor ? 'white' : defaultColor)}
      >
        <Text>Click to Change Color</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{height: 50, width: 100, borderWidth: 1}}
        onPress={() => Actions.friends()}
      >
        <Text>Open bottom view</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{height: 50, width: 100, borderWidth: 1}}
        onPress={() => Actions.pop()}
      >
        <Text>Pop</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Map

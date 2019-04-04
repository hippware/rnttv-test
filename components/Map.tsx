import React, {useState} from 'react'
import {Text, View} from 'react-native'
import {TouchableHighlight, TouchableOpacity} from 'react-native-gesture-handler'
import {Actions} from 'react-native-router-flux'

const Map = ({params}) => {
  const [color, setColor] = useState('lightblue')
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
      {/* <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                onPress={() => setColor(color === 'red' ? 'white' : 'red')}
            >
                <Text>Click to Change Color</Text>
            </TouchableOpacity> */}
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

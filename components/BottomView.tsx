import React, {useState} from 'react'
import {Text, View, TextInput, TouchableOpacity, FlatList, Dimensions} from 'react-native'
import {TouchThroughWrapper, TouchThroughView} from 'react-native-touch-through-view'

const {width, height} = Dimensions.get('window')

const defaultColor = 'white'

const BottomView = () => (
  <TouchThroughWrapper style={{width, height}}>
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={item => item.toString()}
      keyboardDismissMode="on-drag"
      style={{flex: 1}}
      ListHeaderComponent={
        <View style={{borderWidth: 1, borderColor: 'green'}}>
          <TouchThroughView style={{width, height: height / 2}} />
          <TextInput
            style={{
              flex: 1,
              height: 50,
              fontSize: 16,
              borderWidth: 1,
              backgroundColor: 'white',
            }}
            returnKeyType="search"
            clearButtonMode="while-editing"
            placeholder="Search by name or username"
            selectionColor={'blue'}
          />
        </View>
      }
    />
  </TouchThroughWrapper>
)

const Item = ({item}) => {
  const [color, setColor] = useState(defaultColor)
  return (
    <View
      style={{
        height: 100,
        flex: 1,
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity
        style={{flex: 1, width: 100, borderWidth: 1}}
        onPressIn={() => setColor(color === defaultColor ? 'red' : defaultColor)}
      >
        <Text>{item.toString()}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomView

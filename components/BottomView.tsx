import React, {useState} from 'react'
import {Text, View, TextInput, TouchableWithoutFeedback} from 'react-native'
import DraggablePopupList from './DraggablePopupList'
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler'
import {TouchThroughWrapper, TouchThroughView} from 'react-native-touch-through-view'
import {width, height} from './Global'

const defaultColor = 'white'

const Item = ({item}) => {
  const [color, setColor] = useState(defaultColor)
  return (
    <View
      style={{
        height: 100,
        width: '100%',
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

const keyExtractor = item => item.toString()

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const BottomView = ({params}) => (
  <TouchThroughWrapper style={{width, height}}>
    <FlatList
      data={data}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={keyExtractor}
      bounces={false}
      keyboardDismissMode="on-drag"
      ListFooterComponent={<View style={{backgroundColor: 'white', height: 250}} />}
      style={{flex: 1}}
      ListHeaderComponent={
        <View style={{borderWidth: 1, borderColor: 'green'}}>
          <TouchThroughView style={{width, height: height / 2}} />
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              borderWidth: 1,
              backgroundColor: 'white',
            }}
            // autoFocus
            returnKeyType="search"
            clearButtonMode="while-editing"
            placeholder="Search by name or username"
            selectionColor={'blue'}
          />
        </View>
      }
      showsVerticalScrollIndicator={false}
    />
  </TouchThroughWrapper>
)

export default BottomView

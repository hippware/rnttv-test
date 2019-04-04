import React from 'react'
import {Text, View, TextInput} from 'react-native'
import DraggablePopupList from './DraggablePopupList'

const renderItem = ({item}) => (
  <View
    style={{
      height: 100,
      with: '100%',
      borderColor: 'red',
      borderWidth: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text>{item.toString()}</Text>
  </View>
)

const keyExtractor = item => item.toString()

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const BottomView = ({params}) => (
  <DraggablePopupList
    data={data}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
    headerInner={
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          borderColor: 'lightgrey',
          borderBottomWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 10,
          marginBottom: 10,
        }}
      >
        <TextInput
          style={{
            flex: 1,
            fontSize: 16,
            // fontFamily: 'Roboto-Regular',
            color: 'purple',
          }}
          autoFocus
          // ref={r => (this.input = r)}
          // onChangeText={searchStore.setGlobal}
          // value={searchStore.global}
          returnKeyType="search"
          clearButtonMode="while-editing"
          // onFocus={() => this.list.scrollToOffset({offset: 0, animated: false})}
          placeholder="Search by name or username"
          selectionColor={'blue'}
        />
      </View>
    }
  />
)

export default BottomView

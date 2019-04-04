import React from 'react'
import {Text, View} from 'react-native'

const List = ({params}) => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      height: 500,
      borderColor: 'green',
    }}
  >
    <Text style={{fontSize: 30}}>hello</Text>
  </View>
)

export default List

// class DraggablePopupList extends React.Component {
//   render() {
//     const {headerInner, fadeNavConfig, style, offset, ...listProps} = this.props
//     const opacity = this.scrollY.interpolate({
//         inputRange: [0, height / 2 - 80, height / 2],
//         outputRange: [0, 0, 1],
//     })
//     return (
//         <TouchThroughWrapper style={{width, height}}>
//           <FlatList
//             ref={r => (this.list = r)}
//             bounces={false}
//             keyboardDismissMode="on-drag"
//             ListFooterComponent={<View style={{backgroundColor: 'white', height: 250}} />}
//             {...listProps}
//             style={[{flex: 1}, style]}
//             ListHeaderComponent={
//             <DraggablePopupListHeader inner={this.props.headerInner} offset={offset} />
//             }
//             showsVerticalScrollIndicator={false}
//           />
//           {fadeNavConfig && (
//               <Animated.View style={{opacity, position: 'absolute', top: 0, right: 0, left: 0}}>
//               <NavBarHeader config={fadeNavConfig} />
//               </Animated.View>
//           )}
//         </TouchThroughWrapper>
//     )
//   }
// }

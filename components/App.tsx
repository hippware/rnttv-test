import React, {useEffect} from 'react'
import {Router, Scene, Stack, Actions} from 'react-native-router-flux'
import MainView from './MainView'
import BottomView from './BottomView'
import SplitRenderer from './SplitRenderer'

export default () => {
  // push the bottomList view on the stack after initial render
  useEffect(() => {
    Actions.bottomList()
  }, [])

  return (
    <Router>
      <Stack hideNavBar renderer={SplitRenderer}>
        <Scene key="home" component={MainView} hideNavBar />
        <Scene key="bottomList" component={BottomView} />
      </Stack>
    </Router>
  )
}

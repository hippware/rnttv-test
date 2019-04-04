import React from 'react'
import {StyleSheet} from 'react-native'
import {Router, Scene, Stack, Modal, Lightbox, Tabs} from 'react-native-router-flux'
import Map from './Map'
import BottomView from './BottomView'
import SplitRenderer from './SplitRenderer'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Tabs hideNavBar hideTabBar>
          <Lightbox>
            <Stack initial hideNavBar key="main">
              <Stack hideNavBar>
                {/* <Stack key="preConnection" navTransparent type="replace">
                  <Scene key="slideshow" component={OnboardingSlideshow} onSignIn="signIn" onBypass="testRegisterScene" />
                  <Scene key="signIn" component={SignIn} back />
                  <Scene key="verifyCode" component={VerifyCode} />
                  <Scene key="testRegisterScene" component={TestRegister} success="connect" />
                </Stack> */}
                <Modal key="logged" hideNavBar headerMode="screen" type="replace">
                  <Stack>
                    <Stack hideNavBar renderer={SplitRenderer}>
                      <Scene key="home" component={Map} hideNavBar />
                      <Scene key="friends" component={BottomView} />
                    </Stack>
                  </Stack>
                </Modal>
              </Stack>
            </Stack>
          </Lightbox>
        </Tabs>
      </Router>
    )
    // return <View><Text>Hello</Text></View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

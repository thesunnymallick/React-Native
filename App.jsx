import { View, Text, SafeAreaView,  } from 'react-native'
import React from 'react'
// import FlexBox from './Pages/FlexBox'
// import ButtonComponent from './components/ButtonComponet'
// import TextInputComponent from './components/TextInputComponent'
// import ScrollViewCom from './components/ScrollViewCom'
// import CaroselCom from './components/CaroselCom'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './layouts/RootNavigation'
import DrawerNavigation from './navigation/DrawerNavigation'


const App = () => {
  return (
   <NavigationContainer>
    {/* <RootNavigation/> */}
    <DrawerNavigation/>
   </NavigationContainer>
  )
}

export default App
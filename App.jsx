import { View, Text, SafeAreaView,  } from 'react-native'
import React from 'react'
import FlexBox from './Pages/FlexBox'
import ButtonComponent from './components/ButtonComponet'
import TextInputComponent from './components/TextInputComponent'
import ScrollViewCom from './components/ScrollViewCom'
import CaroselCom from './components/CaroselCom'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <FlexBox/>
     <ButtonComponent /> */}
     {/* <TextInputComponent/> */}
     {/* <ScrollViewCom/> */}
     <CaroselCom/>
  </SafeAreaView>
  )
}

export default App
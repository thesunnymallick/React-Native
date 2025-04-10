import { View, Text, StyleSheet, Image, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import instagramLogo from "../assets/instagramLogo.png"
const TextInputComponent = () => {

  const [email, setEmail]=useState("");
  const [password, setPassowrd]=useState("");

   // Handle Submit
   const handleSubmit=()=>{
    Alert.alert(
      `Your email is : ${email}
      
       Your Password is : ${password}
      `
    )
   }

  return (
    <View style={Styles.container}>
       <View style={Styles.loginContainer} >
        <Image style={Styles.logo} source={instagramLogo}/>
         {/* email input */}
         <View style={Styles.inputContainer}>
            <Text style={Styles.inputText}>Email</Text>
            <TextInput
             style={Styles.input}
             value={email}
             onChangeText={(text)=>setEmail(text)}
             
             />
         </View>
         {/* password input */}
         <View style={[Styles.inputContainer, {marginTop:10}]}>
            <Text style={Styles.inputText}>Password</Text>
            <TextInput 
             style={Styles.input}
             value={password}
             onChangeText={(text)=>setPassowrd(text)}
            />
         </View>

         <View style={{width:"100%", marginTop:20}}>
          <Button onPress={handleSubmit}  title='Log in'/>
         </View>
       </View>
    </View>
  )
}

// Style Sheet Input
const Styles=StyleSheet.create({
  container:{
    // backgroundColor:"#dadada",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:"100%"
  },
  loginContainer:{
   flexDirection:"column",
   justifyContent:"center",
   alignItems:"center",
   width:"100%",
   padding:30
  },
  logo:{
    width:200,
    height:100,
    objectFit:"cover"
  },
  inputContainer:{
    flexDirection:"column",
    width:"100%"
  },
  inputText:{
    fontSize:20,
    fontWeight:600,
  },
  input: {
    borderWidth: 1,
    backgroundColor:"#dadada",
    borderColor:"white",
    padding: 8,
    borderRadius: 5,
    width: "100%",
    height:45,
    marginTop: 5,
    fontSize:20,
  },
})

export default TextInputComponent
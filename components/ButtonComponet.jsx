import {View, Text, Button, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';

const ButtonComponent = () => {
  const [count, setCount]=useState(0);

  // Handle Increment
  const handleIncrement=()=>{
      if(count<10){
        setCount(count+1);
      
      }else{
        Alert.alert("Limit Reached", "You can't increase the value beyond 10");
      }
  
   }

   // handle Decrement
   const handelDecrement=()=>{
     if(count>0){
        setCount(count-1);
     }else{
        Alert.alert("Limit Reached", "You can't decrease the value  0");
     }
   }

  



  return (
    <View style={Styles.container}>
      <View style={Styles.counterContainer} >
        <Text style={Styles.counterText}>Count Is : <Text style={count}>{count}</Text></Text>
         <View style={Styles.buttonContainer} >
          {/* <Button color={'green'} title="-" />
          <Button color={'green'} title="+" /> */}

          <TouchableOpacity
           style={Styles.button}
           onPress={handelDecrement}
          >
            <Text
            style={Styles.buttonText}
             >-</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={Styles.button}
          onPress={handleIncrement}
          >
            <Text style={Styles.buttonText}>+</Text>
          </TouchableOpacity>


         </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dadada',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    flexDirection: "column",
    justifyContent:"center",
    gap:10,
  },
  counterText:{
    fontSize:25,
    fontWeight:700,
    textAlign:"center"
  },
  count:{
    color:"grren",
    fontWeight:"700",
  },
  buttonContainer:{
    marginTop:10,
    flexDirection: "row",
    justifyContent:"space-between"
  },
  button:{
    width:50,
    height:40,
    backgroundColor:"green",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,

  },
  buttonText:{
    color:"white",
    fontSize:30,
  },
});

export default ButtonComponent;

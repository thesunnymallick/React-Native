import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlexBox = () => {
  return (
    <View style={Styles.container}>
      <View  style={Styles.headingSection}>
        <Text style={Styles.heading}>Flex Box</Text>
        <Text style={Styles.para}>This is flex box container.</Text>
      </View>

      <View style={Styles.container2}>
        <View style={Styles.box1}>
          <Text style={Styles.myFont}>Text1</Text>
        </View>

        <View style={Styles.box2}>
          <Text style={Styles.myFont}>Text1</Text>
        </View>

        <View style={Styles.box3}>
          <Text style={Styles.myFont}>Text1</Text>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    width: '100%',
    height: '100%',
    padding: 10,
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    gap: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30,
  },

  headingSection:{
    gap:5
  },
  heading:{
     textAlign:"center",
     fontSize:35,
     fontWeight:800
  },

  para:{
     fontSize:20,
     fontWeight:400,
     opacity:0.8
  },

  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  myFont: {
    color: 'white',
    fontSize: 20,
    fontWeight:600
  },

  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FlexBox;

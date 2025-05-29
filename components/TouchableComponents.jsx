import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from './Header';

const TouchableComponents = () => {
  return (
    <SafeAreaView 
      
    >
      <Header title={'Touchable Components'} />

      <View 
        style={styles.container}
      >
      <View style={styles.buttonContainer}>
        <TouchableOpacity
         activeOpacity={0.5}
        style={styles.btn1}>
          <Text style={styles.btnText}>Touchable Opacity</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },

  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 10,
  },

  btn1: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor:"skyblue",
    borderRadius:10,

  },
  btnText: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 40,
    color:"white",
    textAlign:"center"
  },
});

export default TouchableComponents;

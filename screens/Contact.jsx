import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const Contact = () => {
  return (
    <SafeAreaView>
      <Header title={"Contact"}/>
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 20,
              letterSpacing: 0,
              fontWeight: 700,
            }}>
            Contact
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;

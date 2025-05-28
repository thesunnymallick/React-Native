import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';

const About = () => {
  return (
    <SafeAreaView>
      <Header title={"About"}/>
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 700, lineHeight: 20}}>
            About
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;

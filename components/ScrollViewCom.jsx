import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';

const data = [
  {
    name: 'Lady',
    imageUrl:
      'https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg',
  },
  {
    name: 'Girl',
    imageUrl:
      'https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg',
  },
  {
    name: 'Beautiful',
    imageUrl:
      'https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg',
  },
  {
    name: 'Redhead',
    imageUrl:
      'https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg',
  },
  {
    name: 'Girl',
    imageUrl:
      'https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg',
  },
  {
    name: 'Girl',
    imageUrl:
      'https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg',
  },
];

const ScrollViewCom = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>Scroll View Component</Text>

       <ScrollView horizontal={true}>
       <View style={Styles.storyContainer}>
        {/* Card Container */}
          {
             data.map((item, index)=>{
              return(
                <View key={index} style={Styles.card}>
                <View style={Styles.story} >
                  <Image
                    style={Styles.storyImage}
                    source={{uri:item.imageUrl}}
                  />
                </View>
                <Text style={Styles.storeText}>{item.name}</Text>
              </View>
              )
             })
          }
      </View>
       </ScrollView>
    </View>
  );
};

// Scroll View Component
const Styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },

  titleText: {
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'center',
  },
  storyContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection :"row",
    alignItems:"center",
    gap:18
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:"center",
    height: 100,
    gap:6,
  },
  story:{
   width:80,
   height:80,
   borderRadius:50,
  },

  storyImage:{
    width:80,
    height:80,
    borderRadius:50,
    borderWidth:2,
    borderColor:"red"
   },
   storeText:{
    fontSize:15,
    fontWeight:600,
   }

});

export default ScrollViewCom;

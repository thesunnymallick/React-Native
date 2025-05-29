import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import Header from './Header';




const employeeData = [
  {
    id: 1,
    name: 'Sunny Mallick',
  },
  {
    id: 2,
    name: 'Kiron Mallick',
  },
  {
    id: 3,
    name: 'Rahul Mallick',
  },
  {
    id: 4,
    name: 'Raj Mallick',
  },
  {
    id: 5,
    name: 'Amana Sk',
  },
  {
    id: 6,
    name: 'Najmul Alam',
  },
];





const FlatListComponent = () => {
  return (
    <SafeAreaView>
      <Header title={'Flat List'} />
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={<Text style={styles.flatListHeader}>Flat List Header</Text>}
          data={employeeData}
          renderItem={({item}) => <Text style={styles.textItem}>{item.name}</Text>}
          keyExtractor={item => item.id}
          ListFooterComponent={<Text style={styles.flatListHeader}>Footer List</Text>}
        />
      </View>
    </SafeAreaView>
  );
};






const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },

  flatListHeader:{
    fontSize:25,
    fontWeight:500,
    

  },

  textItem: {
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0,
    color: 'black',
    marginVertical: 12,
    fontWeight:600
  },
});



export default FlatListComponent;

import { View, Text, SafeAreaView, StyleSheet, SectionList } from 'react-native'
import React from 'react'
import Header from './Header'

const  SectionListComponent= () => {
   
    const sectionList=[
        {
            title:"Mobile",
            data: ["samsung A52s", "I phone 15", "samsung 51", "I phone 13","redmi", "i phone pro",]
        },
        {
            title:"Laptop",
            data: ["macbook air", "Imac", "macbook pro", "macbook m2",]
        },
        {
            title:"TV",
            data: ["samsung", "LG", "sony", "Asus",]
        }
    ]




  return (
    <SafeAreaView>
         <Header title={"Section List"}/>
         <View style={styles.container}>
           <SectionList
            sections={sectionList}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
            renderItem={({item})=><View style={styles.itemListContanier}>
            <Text style={styles.itemList}>{item}</Text>
          </View>}
           />
         </View>
    </SafeAreaView>
  )
}


const styles=StyleSheet.create({
   container:{
      paddingHorizontal:24,
      paddingVertical:12,
   },
   
   itemListContanier:{
      paddingHorizontal:10,

   },

   itemList:{
    fontSize:14,
    fontWeight:400,
    marginBottom:8,
    marginLeft:10,
   },

   sectionHeader:{
     fontWeight:600,
     fontSize:18,
     color:"black",
     marginBottom:12,
   }

})

export default SectionListComponent
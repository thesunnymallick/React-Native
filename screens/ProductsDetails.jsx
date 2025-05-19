import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getProductById} from '../services/procutsApi';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ProductsDetails = ({route}) => {
  const {productID} = route.params;
  const [details, setDetails] = useState(null);
  const navigation = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Fetch the product using product id
  useEffect(() => {
    const fetchProductsDetails = async () => {
      try {
        const {data, status} = await getProductById(productID);
        if (status === 200) {
          console.log(data);
          setDetails(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    // fetch product details
    fetchProductsDetails();
  }, [productID]);

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setIsScrolled(offsetY > 50);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
      <View
        style={[
          styles.header,
          {backgroundColor: isScrolled ? '#fff' : 'transparent'},
        ]}>
        <Icon
          name="arrow-back"
          size={24}
          color="#000" // Fix icon color
          style={styles.backArrowIcon}
          onPress={() => navigation.goBack()}
        />
      </View>

      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: details?.thumbnail}} />
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.contentHeader}>
            <Text style={styles.contentTitle}>{details?.title}</Text>
            <Text style={styles.contentPrice}>${details?.price}</Text>
          </View>
          <Text style={styles.contentDes}>
            {details?.description}
          </Text>
        </View>

        <View style={styles.similerProductContainer} >
         <Text style={styles.similerProductHeader}>Similar Products</Text>
        </View>

      </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:"#ffff"
 
  },
  container:{
    position: 'relative',
  },

  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 40, // Ensure header is on top
    paddingHorizontal:24,
    
  },
  backArrowIcon: {
    width: 24,
    height: 24,
    resizeMode:"contain"
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor:"#E8E8E8",
    padding: 10,
    marginBottom: 30,

  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode:"contain"
  },

  contentContainer: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  contentHeader: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentTitle: {
    fontSize: 20,
    color: '#000',
    lineHeight: 24,
    fontWeight: 600,
  },
  contentPrice: {
    fontSize: 18,
    color: 'green',
    fontWeight: 700,
  },
  contentDes: {
    paddingVertical: 10,
    lineHeight: 24,
    marginTop: 10,
    fontSize: 14,
    fontWeight: 400,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
  },
  similerProductContainer: {
    padding: 24,
  },
  similerProductHeader: {
    fontSize: 20,
    fontWeight: 600,
    color: '#000',
  },
});

export default ProductsDetails;

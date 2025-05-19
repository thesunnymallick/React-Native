import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAllProducts} from '../services/procutsApi';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const navigation = useNavigation();

  // handle buy now
  handleBuyNow = ID => {
    navigation.navigate('PRODUCT_DETAILS', {productID: ID});
  };

  

  // fetch all products
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const {data} = await getAllProducts();
        setAllProducts(data?.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllProducts();
  }, []);






  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Our Products</Text>

        <View style={styles.productContainer}>
          {allProducts.map(item => {
            console.log(item.thumbnail);
            return (
              <View style={styles.card} key={item?.id}>
                <View style={styles.productImage}>
                  <Image style={styles.image} source={{uri: item.thumbnail}} />
                </View>
                <View style={styles.contentContainer}>
                  <Text style={styles.productPrice}>${item.price}</Text>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={styles.productTitle}>
                    {item?.title}
                  </Text>
                  <View style={styles.ratingContainer}>
                    {[...Array(5)].map((_, index) => (
                      <Text key={index} style={styles.star}>
                        {index < Math.floor(item.rating) ? '★' : '☆'}
                      </Text>
                    ))}
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={() => handleBuyNow(item.id)}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Buy Now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#FAF9F6',
  },

  title: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 20,
  },
  productContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: "47%",
    height: 300,
    flexDirection: 'column',
    backgroundColor: '#FFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    overflow: 'hidden',
    position: 'relative',
    marginBottom:10,
  },
  productImage: {
    height: '50%',
    backgroundColor: '#E8E8E8',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 10,
  },
  productPrice: {
    fontWeight: 400,
    fontSize: 14,
  },
  productTitle: {
    marginTop: 3,
    fontSize: 16,
    fontWeight: 600,
    color: 'balck',
  },

  ratingContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  star: {
    color: '#FFD700', // Gold color
    fontSize: 16,
    marginRight: 2,
  },

  buttonContainer: {
    position: 'absolute',
    top: 105,
    left: 10,

    width: '100%',
  },

  button: {
    width: '100%',
    padding: 5,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
  },
});

export default Home;

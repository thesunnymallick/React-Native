import {View, Text} from 'react-native';
import React from 'react';

const ProductsDetails = ({route}) => {
  const {productID} = route.params;
  return (
    <View style={{padding: 24}}>
      <Text>ProductsDetails</Text>
      <Text style={{fontSize: 20, fontWeight: 700}}>
        {' '}
        The procuts id is : {productID}
      </Text>
    </View>
  );
};

export default ProductsDetails;

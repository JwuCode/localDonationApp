import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Item } from './item';
import { getPostings } from './postingTests.js';
export function ItemsList ({navigation}) {
function renderProduct({item: product}) {
    return (
      <Item {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.key,
        });
      }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getPostings());
  });

  return (
    <FlatList
    numColumns={2}
      style={styles.productsList}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.key.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}
const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    padding: 20
  },
  row: {
    justifyContent: "space-around"
  }
});
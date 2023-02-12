import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView,   TouchableOpacity, Image, TextInput } from 'react-native';
import { Item } from './item';
import { getPostings } from './postingTests.js';
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import rightArrow from "../assets/right-arrow.png"
import leftArrow from "../assets/left-arrow.png"
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
    <ScrollView style={styles.container}>
      <View style={{display:"flex", flexDirection:"row", alignItems:"center", justifycontent:"center", paddingLeft:10, paddingRight:10}}>
        <Image source={leftArrow} style={{height:20, width:10, marginLeft: 10, marginTop: 20}}/>
        <FlatList
        numColumns={2}
        ListHeaderComponent={<View>
          <Text style={styles.header}>Hello, Neha!</Text>
          <Text>Based on your interests:</Text>
        </View>}
          style={styles.productsList}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.productsListContainer}
          keyExtractor={(item) => item.key.toString()}
          data={products.slice(0, 2)}
          renderItem={renderProduct}
        />
        <Image source={rightArrow} style={{height:20, marginRight: 10, width:10, marginTop: 20}}/>
      </View>
      <Text style={{marginLeft: 30, marginBottom: 20}}>
        Categories to explore:
      </Text>
      <TouchableOpacity style={styles.cateButton}>
        <Text style={styles.cateText}>Clothes</Text>
        <Image style={styles.img1} source={img1}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cateButton}>
        <Text style={styles.cateText}>Toys</Text>
        <Image style={styles.img2} source={img3}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cateButton}>
        <Text style={styles.cateText}>Kitchenware</Text>
        <Image style={styles.img3} source={img4}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cateButton} 
      onPress={() =>
        navigation.navigate('Shoes')
      }>
        <Text style={styles.cateText}>Shoes</Text>
        <Image style={styles.img4} source={img5}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cateButton}>
        <Text style={styles.cateText}>Miscellaneous</Text>
        <Image style={styles.img5} source={img2}/>
      </TouchableOpacity>
      <View></View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  productsList: {
    backgroundColor: 'white',
    marginRight: 0
  },
  cateButton:{
    flexDirection: 'row',
    height:80,
    alignItems: 'center',
    justifyContent:"space-between",
    paddingLeft:20,
    paddingRight:20,
    backgroundColor: '#FF6B00',
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    marginLeft:30,
    marginRight:30,

  },
  cateText:{
    marginBottom:20, color:"white", fontSize:20
  },
  searchBar:{
    borderWidth:1,
    marginLeft:30,
    marginRight:30,
    paddingLeft:10,
    marginTop: 10
  },
  productsListContainer: {
    backgroundColor: 'white',
    height:"auto",
    paddingTop: 20,
    paddingRight: 20,
    marginTop: -10
  },
  row: {

    marginLeft: 30

  },
  welcomeMsg: {
    fontSize: 30,
  },
  header:{
    fontSize:30,
    fontWeight:"bold"
  },
  img1: {
marginLeft: 90
  },
  img2: {
marginLeft: 125
  },
  img3: {
marginLeft: 60
  },
  img4: {
marginLeft: 110
  },
  img5: {
marginLeft: 50
  },

});
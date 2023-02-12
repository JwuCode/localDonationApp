import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView,   TouchableOpacity, Image, TextInput } from 'react-native';
import { Item } from './item';
import { getPostings } from './postingTests.js';
import shoe1 from "../assets/shoe1.jpg"
import shoe2 from "../assets/shoe2.jpg"
import shoe3 from "../assets/shoe3.png"
import shoe4 from "../assets/shoe4.png"
export function ShoesList ({navigation}) {
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
        <View style={styles.listing}>
      <TouchableOpacity style={{flexDirection: 'row',}}>
        <Image source={shoe1} style={{height:90, width: 90}} />
<View style={{flexDirection: 'column', marginLeft: 10, width: 200, }}>
<Text numberOfLines={1} style={styles.name}>Casual Women's Shoes</Text>
        <Text numberOfLines={1} style={styles.state}>
            <Text style={{fontWeight: 'bold'}}>Condition: </Text>
            <Text>Good</Text>
            </Text>
        <Text numberOfLines={1} style={styles.location}>
        <Text style={{fontWeight: 'bold'}}>Distance: </Text>
            <Text>40km</Text>
            </Text>
        <Text numberOfLines={1} style={styles.location}>
        <Text style={{fontWeight: 'bold'}}>SIze: </Text>
            <Text>39cm</Text></Text>
</View>
      </TouchableOpacity>
</View>
      <View style={styles.listing}>
      <TouchableOpacity style={{flexDirection: 'row',}}>
        <Image source={shoe2} style={{height:90, width: 90}} />
<View style={{flexDirection: 'column', marginLeft: 10, width: 200, }}>
<Text numberOfLines={1} style={styles.name}>Casual Men's Shoes</Text>
        <Text numberOfLines={1} style={styles.state}>
            <Text style={{fontWeight: 'bold'}}>Condition: </Text>
            <Text>Good</Text>
            </Text>
        <Text numberOfLines={1} style={styles.location}>
        <Text style={{fontWeight: 'bold'}}>Distance: </Text>
            <Text>15km</Text>
            </Text>
        <Text numberOfLines={1} style={styles.location}>
        <Text style={{fontWeight: 'bold'}}>SIze: </Text>
            <Text>46cm</Text></Text>
            </View>
      </TouchableOpacity></View>
      <View style={styles.listing}>
      <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {
        navigation.navigate('ProductDetails', {
          productId:102,
        });
      }}>
        <Image source={shoe3} style={{height:90, width: 90}} />
<View style={{flexDirection: 'column', marginLeft: 10, width: 200, }}>
<Text numberOfLines={1} style={styles.name}>Girl's Shoes</Text>
        <Text numberOfLines={1} style={styles.state}>
            <Text style={{fontWeight: 'bold'}}>Condition: </Text>
            <Text>Mildly Used</Text>
            </Text>
        <Text numberOfLines={1} style={styles.location}>
        <Text style={{fontWeight: 'bold'}}>Distance: </Text>
            <Text>6km</Text>
            </Text>
        <Text numberOfLines={1} style={styles.location}>
        <Text style={{fontWeight: 'bold'}}>SIze: </Text>
            <Text>22cm</Text></Text>
</View>
      </TouchableOpacity>
</View>

<View style={styles.listing}>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <Image source={shoe4} style={{height:90, width: 90}} />
<View style={{flexDirection: 'column', marginLeft: 10, width: 200, marginBottom: 50}}>
<Text numberOfLines={1} style={styles.name}>Men's Formal Shoes</Text>
        <Text numberOfLines={1} style={styles.state}>
            <Text style={{fontWeight: 'bold'}}>Condition: </Text>
            <Text>Good</Text>
            </Text>
        <Text numberOfLines={1} style={styles.location}>
        <Text style={{fontWeight: 'bold'}}>Distance: </Text>
            <Text>6km</Text>
            </Text>
        <Text numberOfLines={1} style={styles.location}>
        <Text style={{fontWeight: 'bold'}}>SIze: </Text>
            <Text>42cm</Text></Text>
</View>
      </TouchableOpacity>
</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    listing: {
        
        backgroundColor: 'white',
        borderRadius: 2,
        shadowOpacity: 0.5,
        shadowRadius: 8,
        shadowColor: 'black',
        shadowOffset: {
          height: 0,
          width: 0,
        },
        elevation: 5,
        marginVertical: 10,
        padding: 15,
        width: 400
    },
    container: {
      backgroundColor: 'white',
      padding: 20,
      display: 'flex'
    },
    productsList: {
      backgroundColor: 'white',
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
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: -10
    },
    row: {
  
      marginLeft: 32.5,
  
    },
    welcomeMsg: {
      fontSize: 30,
    },
    header:{
      fontSize:30,
      fontWeight:"bold"
    },
    name: {
        fontSize: 13,
        fontWeight: 'bold',
        width: 300,
        marginTop: 10,
    
      },
      state: {
        fontSize: 13,
        fontWeight: '400',
        width: 300,
      },
      location: {
        fontSize: 13,
        fontWeight: '400',
    
        width: 300,
      },


  
  });
import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  TouchableOpacity,
  SafeAreaView, 
  Button, 
  StyleSheet
  } from 'react-native';
import { getPosting } from './postingTests';
export function ItemDetails({navigation, route}) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});


  useEffect(() => {
    setProduct(getPosting(productId));
  });

  return (
    <View>
      <ScrollView>
        <View style={styles.infoContainer}>
          <Image
            style={styles.image}
            source={product.image}
          />
          <View style={{marginLeft:16}}>
            <Text style={styles.name}>{product.name}</Text>
            <Text numberOfLines={1} style={{fontSize:20}}><Text style={{fontWeight:"bold"}}>Condition: </Text>{product.state}</Text>
            <Text numberOfLines={1} style={{fontSize:20}}><Text style={{fontWeight:"bold"}}>Distance: </Text>{product.distance}</Text>
            <Text numberOfLines={1} style={{fontSize:20}}><Text style={{fontWeight:"bold"}}>Size: </Text>{product.size}</Text>
            <Text style={{fontWeight:"bold", fontSize:25, marginTop:40}}>Lakshmi Katri</Text>
            <Text>Member since 2022</Text>
          </View>
        </View>
        <View style={{display:"flex", alignItems:"center", width:"100%"}}>
          <TouchableOpacity onPress={()=>{navigation.navigate("Chat")}} style={{backgroundColor:"#FF2E00", borderRadius:50, marginBottom:30, marginTop:30, padding:20, display:"flex", justifyContent:"center", alignItems:"center"}}><Text style={{color:"white", fontSize:35, fontWeight:"bold"}}>Contact Donator</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 310,
    width: '90%',
    marginLeft:16
  },
  infoContainer: {
    paddingTop:50,
    backgroundColor: 'white',
    borderRadius: 2,
    shadowOpacity: 0.5,
    shadowRadius: 8,
    height:"80%",
    paddingBottom:30,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 5,
  },
  name: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom:15,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});
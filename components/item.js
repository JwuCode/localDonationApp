import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
export function Item({name, price, image, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={image}
      />
      <View style={styles.infoContainer}>
        <Text  numberOfLines={1} style={styles.name}>{name}</Text>
        <Text numberOfLines={2} style={styles.price}>$ {price}</Text>
      </View>
    </TouchableOpacity>
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
    width: 150,
    height: 225
  },
  thumb: {
    height: 150,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: 150,
  },
  infoContainer: {
    padding: 10,
    width: '40%',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 125,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    width: 125
  },
});
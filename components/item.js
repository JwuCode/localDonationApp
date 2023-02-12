import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
export function Item({name, state, location, image, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={image}
      />
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.name}>{name}</Text>
        <Text numberOfLines={1} style={styles.state}>{state}</Text>
        <Text numberOfLines={1} style={styles.location}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    marginRight: 15,
    marginLeft: -5,

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
    marginVertical: 20,
    width: 120,
    height: 175
  },
  thumb: {
    height: 100,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    width: 100,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 9
  },
  infoContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    width: '32%',
    paddingBottom: 0
  },
  name: {
    fontSize: 11,
    fontWeight: 'bold',
    width: 125,
    marginTop: 10,

  },
  state: {
    fontSize: 10,
    fontWeight: '400',
    width: 125,
  },
  location: {
    fontSize: 10,
    fontWeight: '400',

    width: 125,
  },
});
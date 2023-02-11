import { Text, View, StyleSheet, ScrollView, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { useEffect, useState} from 'react';
import { collection, getDocs,where,getDoc, doc, query} from "firebase/firestore";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import getFirebase from './components/firebase-init'
import {getFirestore} from "firebase/firestore"
getFirebase()
const db = getFirestore()
const page = StyleSheet.create({
  container: {
    display:"flex",
    paddingTop:60
  },
  text: {
    fontSize: 30,
    color: '#000',
  },
});

const lists = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#61dafb',
  },
  listItem: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

const container = StyleSheet.compose(page.container, lists.listContainer);
const text = StyleSheet.compose(page.text, lists.listItem);

export default App = ()=>{
  useEffect(()=>{

    async function fetchData () {
      const sample = await getDoc(doc(db, "test-collection", "test1"))
      console.log(sample.data())
    }
    fetchData()
  },[])
  return <ScrollView></ScrollView>
}



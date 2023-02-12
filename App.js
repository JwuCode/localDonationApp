import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItemsList } from './components/itemsList.js';
import { ItemDetails } from './components/itemDetails.js';
import { Cart } from './components/cart.js';
import { CartIcon } from './components/cartIcon.js';
import { CartProvider } from './components/cartContext.js';
import Header from './components/header'
import profile from './assets/naveen-kumar-QGkGM70eMBw-unsplash-modified.png'
import bottomBar from './assets/bottomBar.png'
import scrollbar from './assets/scrollBar.png'
import {ShoesList} from './components/shoes'
import {Chat} from './components/chat.js'
import contact from './assets/contact.png'
const Stack = createNativeStackNavigator();
function App() {
  const [text, onChangeText] = useState('')
  return (
    <CartProvider >
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='Products'component={ItemsList} 
          options={({ navigation }) => ({
            headerTitle:()=><View style={{display:"flex", width:"100%", alignItems:"center"}}>
            <View style={{display:"flex", alignItems:"flex-end", width:"100%"}}>
              <Image source={profile} style={{height:30, width:30, marginRight:40}}/>
            </View>
            <View style={{width:"80%", marginLeft:-30, paddingTop:10}}>
              <TextInput style={{borderWidth:1,
              marginBottom:10,
              paddingLeft:10,
              marginTop: 10
            }} value={text} placeholder="search for items in New Delhi, India" onChangeText={onChangeText}></TextInput>
          </View>
            </View>,
            title:"hello"
          })}/>
          <Stack.Screen name='ProductDetails' component={ItemDetails} 
          options={({ navigation }) => ({
            title: 'Item details',
            headerTitleStyle: styles.headerTitle,
            headerTitle:()=><View style={{display:"flex", width:"95%" ,alignItems:"center"}}>
            <View style={{display:"flex", alignItems:"flex-end", width:"100%"}}>
              <Image source={profile} style={{height:30, width:30, marginRight:40}}/>
            </View>
            
            </View>,
          })} />
          <Stack.Screen name='Chat' component={Chat} 
          options={({ navigation }) => ({
            title: 'Chat',
            headerTitleStyle: styles.headerTitle,
            headerTitle:()=><View style={{display:"flex", width:"95%" ,  alignItems:"center"}}>
            <View style={{
              display:"flex", alignItems: 'center', width:"100%" ,color:"orange", marginRight: 72.5}}>
              <Image source={contact} style={{height:30, width:30, marginRight:40 }}/>
              <Text style={{marginLeft:-41 }}>Lakshmi</Text>
            </View>
            
            </View>
          })} />
          <Stack.Screen name='Shoes' 
          component={ShoesList} 
          options={({ navigation }) => ({
            title: 'Shoes',
            headerTitle:()=><View style={{display:"flex", width:"95%" ,alignItems:"center"}}>
            <View style={{display:"flex", alignItems:"flex-end", width:"100%"}}>
              <Image source={profile} style={{height:30, width:30, marginRight:40}}/>
            </View>
            <View style={{width:"90%", marginLeft:-100, paddingTop:10}}>
              <TextInput style={{borderWidth:1,
              marginBottom:10,
              paddingLeft:10,
              marginTop: 10
            }} value={text} placeholder="search for items in New Delhi, India" onChangeText={onChangeText}></TextInput>
          </View>
          <View style={{flexDirection: 'row' , display: 'flex', width:"100%", height: 40}}>
            <Image source={scrollbar} style={{marginLeft:-65, height:35, width:35}}/>
            <TouchableOpacity style={{marginLeft:15, marginTop: 4, height:30 , width: 100, fontSize: 5, backgroundColor: '#FF6B00' , justifyContent: 'center', borderRadius: 17}}>
            <Text style={{fontSize: 13, marginLeft: 7}}>Closest to you</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 10, marginTop: 4,  width: 120, height: 30, fontSize: 5, backgroundColor: '#FF6B00', justifyContent: 'center', borderRadius: 17}}>
            <Text style={{fontSize: 13, marginLeft: 7}}>Lowest to Highest</Text>
            </TouchableOpacity>
          </View>
            </View>,
          })} />
        </Stack.Navigator>
        <View style={{backgroundColor:"black", height:55, width:"100%"}}>
          <Image style={{width: 300, height: 45, marginLeft: 30, marginTop: 2.5}}source={bottomBar}/>
        </View>
      </NavigationContainer>
    </CartProvider>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});
export default App;
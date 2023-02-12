import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItemsList } from './components/itemsList.js';
import { ItemDetails } from './components/itemDetails.js';
const Stack = createNativeStackNavigator();
function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='Products' component={ItemsList} 
          options={({ navigation }) => ({
            title: 'pepepe',
            headerTitleStyle: styles.headerTitle,
          })}/>
          <Stack.Screen name='ProductDetails' component={ItemDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
          })} />
          <Stack.Screen name='Cart' component={<View></View>} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});
export default App;
import React, {createContext, useState} from 'react';
import { getPosting } from './postingTests';
export const CartContext = createContext();
export function CartProvider(props) {
  const [items, setItems] = useState([]);

  function addItemToCart(key) {
    const product = getPosting(key);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.key == key));
      if(!item) {
          return [...prevItems, {
              key,
              qty: 1,
              product,
              totalPrice: product.price 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.key == key) {
              item.qty++;
              item.totalPrice += product.price;
            }
            return item;
          });
      }
    });
}
function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }

  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice}}>
      {props.children}
    </CartContext.Provider>
  );
}
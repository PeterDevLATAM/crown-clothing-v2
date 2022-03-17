import { useState, createContext } from "react";
import { useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //check if item is already on the cart
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);

  //if it is, incremetn its quantity
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
  //return an array with the updated cartItems
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0)

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(()=>{
    setCartCount(cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0))
  },[cartItems])

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart , cartCount};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

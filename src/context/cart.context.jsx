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

const substractCartItem = (cartItems, itemToSubstract) => {
  const existingItem = cartItems.find((item) => item.id === itemToSubstract.id);
  if (existingItem.quantity === 1)
    return cartItems.filter((item) => item.id !== itemToSubstract.id);
  return cartItems.map((item) =>
    item.id === itemToSubstract.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
const removeCartItem = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id, 0);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  substractItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const substractItemFromCart = (productToSubstract) => {
    setCartItems(substractCartItem(cartItems, productToSubstract));
  };
  const removeItemFromCart = (productToSubstract) => {
    setCartItems(removeCartItem(cartItems, productToSubstract));
  };

  useEffect(() => {
    setCartCount(
      cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    );
    setCartTotal(
      cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,0)
   );
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    cartTotal,
    substractItemFromCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

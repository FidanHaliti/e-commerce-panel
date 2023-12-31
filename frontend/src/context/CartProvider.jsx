import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (cartItem) => {
    setCartItems((prevCart) => [...prevCart,{
      ...cartItem,
      quantity: cartItem.quantity ? cartItem.quantity : 1
    } ]);
  };

  const removeFromCart = (itemId) => {
    const filtredCartItems = cartItems.filter((cartItem) => {
      return itemId !== cartItem.id;
    });
    setCartItems(filtredCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node,
};

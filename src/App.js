import Header from './components/Header';
import Meals from './components/Meals';
import CartContext from './store/CartContext';
import React, { useReducer } from 'react';
import Modal from './components/UI/Modal';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      return existingItemIndex !== -1
        ? [
            ...state.slice(0, existingItemIndex),
            { ...state[existingItemIndex], quantity: (state[existingItemIndex].quantity || 0) + 1 },
            ...state.slice(existingItemIndex + 1)
          ]
        : [...state, { ...action.payload, quantity: 1 }];
    default:
      return state;
  }
};

const App = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      <Header/>
      <Meals/>
    </CartContext.Provider>
  );
}

export default App;

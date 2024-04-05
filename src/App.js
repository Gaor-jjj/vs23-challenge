import Header from './components/Header';
import Meals from './components/Meals';
import CartContext from './store/CartContext';
import React, { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState([]);
  
  const addItem = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem }}>
      <Header/>
      <Meals/>
    </CartContext.Provider>
  );
}

export default App;

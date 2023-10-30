import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext"

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    const newCart = [...cart.filter(i => i.id !== id)];
    setCart(newCart);  
  }

  return (
    <div className="App">
      <CartContext.Provider value={{cart, removeItem}}>
        <Navigation />
      <ProductContext.Provider value={{products, addItem}}>
        {/* Routelar */}
        <main className="content">
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </main>
      </ProductContext.Provider>
      </CartContext.Provider>

    </div>
  );
}

export default App;

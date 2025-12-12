import { useState, useEffect } from 'react';
import MyCart from './components/myCart';
import './App.css';

import './js/getItems.js';

function App() {
  const [myCart, updateCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error(err);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(myCart));
  }, [myCart]);

  useEffect(() => {
    const addToCart = (event) => {
      const item = event.detail;
      updateCart((oldCart) => {
        const exists = oldCart.find((thing) => thing.id === item.id);
        if (exists) {
          return oldCart.map((thing) =>
            thing.id === item.id
              ? { ...thing, quantity: thing.quantity + 1 }
              : thing
          );
        } else {
          return [...oldCart, { ...item, quantity: 1 }];
        }
      });
    };

    window.addEventListener('addToCart', addToCart);
    return () => {
      window.removeEventListener('addToCart', addToCart);
    };
  }, []);

  const deleteItem = (itemId) => {
    updateCart((oldCart) => oldCart.filter((thing) => thing.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    updateCart((oldCart) =>
      oldCart.map((thing) =>
        thing.id === itemId
          ? { ...thing, quantity: thing.quantity + 1 }
          : thing
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    updateCart((oldCart) => {
      const thing = oldCart.find((item) => item.id === itemId);
      if (thing && thing.quantity === 1) {
        return oldCart.filter((item) => item.id !== itemId);
      }
      return oldCart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Mini Marketplace</h1>
      </header>
      <main className="app-main">
        <section className="products-section">
          <h2>Товары</h2>
          <div id="products-container" className="products-container">
            <div className="loading-spinner">Загрузка товаров...</div>
          </div>
        </section>
        <section className="cart-section">
          <MyCart 
            myCart={myCart} 
            onDelete={deleteItem}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
          />
        </section>
      </main>
    </div>
  );
}

export default App;

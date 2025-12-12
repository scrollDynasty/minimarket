import React from 'react';
import CartThing from './cartThing';

function MyCart({ myCart, onDelete, onIncrease, onDecrease }) {
  const totalSum = myCart.reduce((sum, thing) => sum + thing.price * thing.quantity, 0);
  const itemsCount = myCart.reduce((sum, thing) => sum + thing.quantity, 0);

  if (myCart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-icon">Корзина</div>
        <p>Корзина пуста</p>
        <p className="empty-hint">Добавьте товары из каталога</p>
      </div>
    );
  }

  return (
    <div className="cart-list">
      <div className="cart-header">
        <h2>Корзина</h2>
        <div className="cart-summary">
          <span className="summary-item">Товаров: <strong>{itemsCount}</strong></span>
          <span className="summary-total">Итого: <strong>${totalSum.toFixed(2)}</strong></span>
        </div>
      </div>
      <div className="cart-items">
        {myCart.map((thing) => (
          <CartThing 
            key={thing.id} 
            thing={thing} 
            onDelete={onDelete}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        ))}
      </div>
    </div>
  );
}

export default MyCart;

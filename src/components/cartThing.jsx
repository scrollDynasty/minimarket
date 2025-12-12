import React from 'react';

function CartThing({ thing, onDelete, onIncrease, onDecrease }) {
  return (
    <div className="cart-item">
      <img src={thing.image} alt={thing.title} className="cart-item-image" />
      <div className="cart-item-info">
        <h4 className="cart-item-title">{thing.title}</h4>
        <p className="cart-item-price">${(thing.price * thing.quantity).toFixed(2)}</p>
        <div className="cart-item-controls">
          <button className="quantity-btn minus-btn" onClick={() => onDecrease(thing.id)}>
            −
          </button>
          <span className="quantity-value">{thing.quantity}</span>
          <button className="quantity-btn plus-btn" onClick={() => onIncrease(thing.id)}>
            +
          </button>
        </div>
      </div>
      <button className="cart-item-remove" onClick={() => onDelete(thing.id)}>
        ×
      </button>
    </div>
  );
}

export default CartThing;

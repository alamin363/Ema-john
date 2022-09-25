import React from 'react';

const Cart = ({cart}) => {
  return (
    <div>
      <h1>Oder Summary</h1>
      <p>Total Product : {cart.length}</p>
    </div>
  );
};

export default Cart;
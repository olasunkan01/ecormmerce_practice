import React from 'react'
import { useCart } from '../context/CartContext'

import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, removeFromCart, incrementQty, decrementQty, clearCart} = useCart()
  const subtotal = cartItems.reduce((total, item) => total + item.new_price * item.quantity, 0);

  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity*item.new_price, 0);
  return (
    <div className='container py-5'>
      <h2 className='mb-4 text-center'>Your Cart</h2>

      {/* Show empty cart message */}
      {cartItems.length === 0 ? (
        <div className='text-center'>
          <p>Your cart is currently empty.</p>
          <Link to='/' className='btn btn-primary'>Go Shopping</Link>
        </div>
      ) : (
        <div className='row'>
          <div className='col-lg-8'>
            {/* Loop through each cart item */}
            {cartItems.map(item => (
              <div key={item.id} className='d-flex align-items-center justify-content-between border-bottom py-3'>
                <img src={item.img} alt={item.name} width='80' height='80' style={{ objectFit: 'cover' }} />

                <div className='flex-grow-1 ms-3'>
                  <h5>{item.name}</h5>
                  <p className='mb-2'>${item.new_price.toFixed(2)}</p>
                  <div className='d-flex align-items-center gap-2'>
                    <button className='btn btn-sm btn-outline-secondary' onClick={() => decrementQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button className='btn btn-sm btn-outline-secondary' onClick={() => incrementQty(item.id)}>+</button>
                  </div>
                </div>

                <button className='btn btn-sm btn-danger' onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          {/* Cart summary section */}
          <div className='col-lg-4 mt-4 mt-lg-0'>
            <div className='border p-4 rounded shadow-sm'>
              <h4>Summary</h4>
              <hr />
              <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
              <Link to='/signup' className='btn btn-success w-100'>Proceed to Checkout</Link>
              <button className='btn btn-success w-100' onClick={()=>clearCart()}>clear Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
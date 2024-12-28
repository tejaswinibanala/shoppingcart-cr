import React from 'react'
import { CartCard } from '../components/CartCard'
import { useTitle } from '../hooks/useTitle'
import { useCart } from '../context/CartContext'
export const Cart = () => {
  useTitle("Cart")
  const {total, cartList} = useCart();

  return (
    <div className='container mx-auto p-6'>
      <h2 className="text-2xl font-bold mb-4 text-center">Cart Items:{cartList.length}/ ${total}</h2>
      {cartList.map((product) => (
        <CartCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

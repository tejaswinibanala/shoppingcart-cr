import React from 'react'
import { useCart } from '../context/CartContext';

export const CartCard = ({product}) => {
  const {image,title,price} = product;
  const {removeFromCart} = useCart();
  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4">
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="flex-grow px-4">
        <h4 className="text-lg font-medium text-gray-800">{title}</h4>
      </div>

      {/* Product Price */}
      <div className="text-lg font-bold text-gray-800">
        ${price}
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(product)}
        className="ml-4 bg-red-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-400"
      >
        Remove
      </button>
    </div>
  )
}

import React, { useEffect } from 'react'
import useCart from '../hooks/useCart'

function ProductCard({product}) {
    const {cart, dispatch} = useCart()
    const addToCart = ()=>{
        dispatch ({type:'ADD',payload:product}) 
    }

  return (
    <div className="card p-4 border rounded grid grid-rows-[auto_1fr]">
  <img src={product.images[0]} alt="product" className="w-full h-50  mb-4" />
  <div>
    <h2 className="font-bold text-lg mb-2">{product.title}</h2>
    <p className="text-gray-600 mb-4">{product.description.slice(0,150)}</p>
  </div>
  <button onClick={addToCart} className="bg-blue-500 text-white py-2 px-4  rounded">Add to Cart</button>
</div>
  )
}

export default ProductCard

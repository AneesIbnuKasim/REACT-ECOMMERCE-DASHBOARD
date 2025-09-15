import React from 'react'

function ProductCard({product}) {
  return (
    <div className="card p-4 border rounded grid grid-rows-[auto_1fr]">
  <img src={product.image} alt="product" className="w-full h-50  mb-4" />
  <div>
    <h2 className="font-bold text-lg mb-2">{product.title}</h2>
    <p className="text-gray-600 mb-4">{product.description.slice(0,150)}</p>
  </div>
  <button className="bg-blue-500 text-white py-2 px-4  rounded">Add to Cart</button>
</div>
  )
}

export default ProductCard

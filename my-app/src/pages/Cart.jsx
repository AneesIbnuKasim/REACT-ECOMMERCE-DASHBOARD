import React from 'react'
import ProductCard from '../components/ProductCard'
import useCart from '../hooks/useCart'

function Cart() {
  const {cart} = useCart()
  return (
    <>

    <div className='flex'>
    {
      <ul className='mt-10 flex flex-col gap-20'>
        {cart.map(item=>
       ( <li className='w-full grid grid-cols-[1fr_1fr_1fr_1fr] gap-25 h-33'>
        <img src={item.image} className='h-30 w-25' alt="" />
        <h1 className='h-full items-center flex'>{item.title}</h1>
        <h1 className='h-full flex items-center'>{item.price}</h1>
        <h1 className='h-full flex items-center'><button className='px-4 py-2 bg-red-500 text-white rounded'>Remove</button></h1>
       </li>)
      )}
      </ul>
    }
    </div>
    </>
  )
}

export default Cart

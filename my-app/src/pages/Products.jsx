import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

function Products() {

    const [products, setProducts] = useState([])
    const fetchProducts = async()=>{
        
        try {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.log(error.message);
            
        }
        
    }
    useEffect(()=>{
        fetchProducts()
    },[])
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {
        products.map(product=>
            (<ProductCard product={product}/>)
        )
      }
    </div>
  )
}

export default Products

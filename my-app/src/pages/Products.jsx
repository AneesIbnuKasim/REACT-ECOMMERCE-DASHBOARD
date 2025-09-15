import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard';
import useDebounce from '../hooks/useDebounce';

function Products() {
    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const debouncedSearch = useDebounce(searchQuery, 500)

    const fetchProducts = useCallback(async()=>{
        
        try {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            setAllProducts(data)
            setProducts(data)
        } catch (error) {
            console.log(error.message);
            
        }
        
    },[])

    const handleSearch =async(e)=>{
        setSearchQuery(e.target.value)

    }
    useEffect(()=>{
        const runSearch = ()=>{
            if(!debouncedSearch) setProducts(allProducts)
                else {
                    const searchResult = allProducts.filter(product=>{
                        return product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
                    })
                    setProducts(searchResult)
                    }
        }
        runSearch()
    },[debouncedSearch])
    
    useEffect(()=>{
        fetchProducts()
    },[])
  return (
    <>
    <div className='my-5 ml-auto w-80 flex gap-1'>
        <input value={searchQuery} type="text" onChange={handleSearch}  className='border-1 text-xl px-1 outline-0 rounded' type="text" />
        <button className='bg-blue-500 px-5 py-2 rounded text-white'>Search</button>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {
        products.map(product=>
            (<ProductCard key={product.id} product={product}/>)
        )
      }
    </div>
    </>
  )
}

export default Products

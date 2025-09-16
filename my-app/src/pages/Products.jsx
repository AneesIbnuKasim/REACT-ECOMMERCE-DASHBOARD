import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import useDebounce from '../hooks/useDebounce';

function Products() {
    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const debouncedSearch = useDebounce(searchQuery, 500)
    const PAGE_SIZE = 20

    const fetchProducts = useCallback(async()=>{
        setLoading(true)
        try {
            const res = await fetch("https://dummyjson.com/products?limit=1000")
            // https://fakestoreapi.com/products  https://dummyjson.com/products?limit=1000
            const data = await res.json()
            setAllProducts(data.products)
            setProducts(data.products.slice(0,PAGE_SIZE))
        } catch (error) {
            console.log(error.message);
        }
        setLoading(false)
    },[])

    const loadMore = ()=>{
        const nextProducts = allProducts.slice(page*PAGE_SIZE,(page+1)*PAGE_SIZE)
        setProducts(prev=>[...prev, ...nextProducts])
        setPage(prev=>prev+1)
    }

    const handleSearch =async(e)=>{
        setSearchQuery(e.target.value)

    }
// infinite loading
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.innerHeight+window.scrollY>= document.body.offsetHeight-500 &&
                !loading && products.length < allProducts.length
            ) { loadMore()}
        }
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    }, [products, loading, allProducts])

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
   {loading && ( <div> <h1>Loading...</h1>    </div>)}
   {!loading && products.length > allProducts.length && (
    <div><h1>No more products to load!</h1></div>
   )}
    </>
  )
}

export default Products

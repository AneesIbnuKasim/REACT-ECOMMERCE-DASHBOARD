import { useEffect, useState } from "react"

const useDebounce = (value, delay)=>{
    const [debounced, setDebounced] = useState(value)
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounced(value)
        },delay)
        return ()=>clearTimeout(timer)
    },[delay, value])
    return debounced
}

export default useDebounce
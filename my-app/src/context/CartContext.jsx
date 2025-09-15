import { createContext, useReducer, useState } from "react";


export const CartContext = createContext()

function cartReducer(state, action) {
    switch(action.type) {
        case 'ADD' : return [...state, action.payload]
        case 'REMOVE' : return state.filter(product=>product.id!=action.payload.id)
        case 'CLEAR' : return []
        default: return state
    }
}

export default function CartProvider ({children}) {
    const [cart, dispatch] = useReducer(cartReducer,[])

    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}


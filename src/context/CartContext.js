import { createContext, useContext, useReducer, useEffect } from "react";
import products from "../data/products";
import CartReducer from "../reducer/cartReducer";

// context creating
const CartContext = createContext()
const initState = {
    products:products,
    total:0,
    amount:0
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initState)
    function formatMoney(money){
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    function removeItem(id) {
        // console.log("Delete id = " + id)
        dispatch({type:"REMOVE", payload:id})
    }
    function addItem(id) {
        console.log("add item" + id)
        dispatch({type:"Add", payload:id})
    }
    function decreaseItem(id) {
        console.log("decrease item" + id)
        dispatch({type: "DECREASE", payload:id})
    }
    useEffect(() => {
        // console.log("calculate sum")
        dispatch({type:"CALCULATE_TOTAL"})
    }, [state.products])
    return (
        <CartContext.Provider value={{...state, formatMoney, removeItem, addItem, decreaseItem}}>
            {children}
        </CartContext.Provider>
    )
}

// export context
export const useCart=()=>{
    return useContext(CartContext)
}
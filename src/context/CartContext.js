import { createContext, useContext, useReducer } from "react"
import { CartReducer } from "../reducer/CartReducer";

const initialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(initialState);

export const CartProvider = ({children}) => {
    const [state, dispacth] = useReducer(CartReducer, initialState);
    
    const addToCart = (product) => {
        const updatedCart = state.cartList.concat(product);
        updateTotal(updatedCart);
        dispacth({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCart
            }
        })
    }

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter(current => current.id !== product.id);
        updateTotal(updatedCartList);
        dispacth({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList
            }
        })
    }

    const updateTotal = (products) => {
        let total = 0;
        products.forEach(product => total = total + product.price);

        dispacth({
            type: "UPDATE_TOTAL",
            payload: {
                total
            }
        })
    }
    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart

    };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart =() => {
    const conetxt = useContext(CartContext);
    return conetxt;
}
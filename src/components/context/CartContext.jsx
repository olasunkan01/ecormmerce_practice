import { useEffect } from "react";
import React, {createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCart=()=>useContext(CartContext)

export const CartProvider = ({children}) => {
    const[cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved? JSON.parse(saved):[];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);


    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const exists = prevItems.find((item) => item.id === product.id);
            if (exists) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }; 

    const incrementQty = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    }

    const decrementQty = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                    : item
            )
        );
    }


    const clearCart = () => setCartItems([])


    const totalItems = ()=>  cartItems.reduce((total, item) => total + item.quantity, 0)

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementQty, decrementQty, clearCart, totalItems }}>
            {children}
        </CartContext.Provider>
    )

}
import { createContext, useReducer, useContext, useEffect } from 'react'
import { cartReducer } from './cartReducer'
import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from './cartTypes'

const CartContext = createContext()

const initialCart = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addItem = (product) => {
    dispatch({ type: ADD_ITEM, payload: product })
  }

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id })
  }

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

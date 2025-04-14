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
}

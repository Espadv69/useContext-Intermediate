import { createContext, useReducer, useContext, useEffect } from 'react'
import { cartReducer } from './cartReducer'
import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from './cartTypes'

const CartContext = createContext()

const initialCart = JSON.parse(localStorage.getItem('cart')) || []

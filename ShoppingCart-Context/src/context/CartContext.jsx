import { createContext, useReducer, useContext, useEffect } from 'react'
import { cartReducer } from './cartReducer'
import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from './cartTypes'

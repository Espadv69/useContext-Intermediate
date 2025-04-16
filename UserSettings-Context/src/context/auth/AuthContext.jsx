import { createContext, useContext, useReducer } from 'react'
import { authReducer } from './authReducer'
import { LOGIN, LOGOUT } from './authTypes'

const AuthContext = createContext()

const initialState = {
  isAuthenticated: false,
  user: null,
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
}

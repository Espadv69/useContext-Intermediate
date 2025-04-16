import { LOGIN, LOGOUT } from './authTypes'

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      }
  }
}

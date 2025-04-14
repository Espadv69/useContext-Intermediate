import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from './cartTypes'

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const existingItem = state.find((item) => item.id === action.payload.id)
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
  }
}

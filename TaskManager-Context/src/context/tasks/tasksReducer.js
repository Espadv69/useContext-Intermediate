import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from './tasksTypes'

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload]
  }
}

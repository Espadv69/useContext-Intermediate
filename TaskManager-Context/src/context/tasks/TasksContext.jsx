import { createContext, useContext, useReducer } from 'react'
import { tasksReducer } from './tasksReducer'
import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from './tasksTypes'

const TasksContext = createContext()

const initialTasks = []

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
}

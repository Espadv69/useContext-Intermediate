import { createContext, useContext, useReducer } from 'react'
import { tasksReducer } from './tasksReducer'
import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from './tasksTypes'

const TasksContext = createContext()

const initialTasks = []

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  const addTask = (task) => {
    dispatch({ type: ADD_TASK, payload: task })
  }

  const removeTask = (id) => {
    dispatch({ type: REMOVE_TASK, payload: id })
  }

  const toggleTask = (id) => {
    dispatch({ type: TOGGLE_TASK, payload: id })
  }

  return (
    <TasksContext.Provider
      value={{ ...tasks, addTask, removeTask, toggleTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}

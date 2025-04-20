import { createContext, useContext, useReducer } from 'react'
import { tasksReducer } from './tasksReducer'
import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from './tasksTypes'

const TasksContext = createContext()

const initialTasks = []

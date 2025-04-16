import { createContext, useContext, useReducer } from 'react'
import { settingsReducer } from './settingsReducer'
import { TOGGLE_THEME, SET_LANGUAGE } from './settingsTypes'

const SettingsContext = createContext()

const initialState = {
  theme: 'light',
  language: 'en',
}

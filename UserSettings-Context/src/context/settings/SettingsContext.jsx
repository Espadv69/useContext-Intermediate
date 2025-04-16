import { createContext, useContext, useReducer } from 'react'
import { settingsReducer } from './settingsReducer'
import { TOGGLE_THEME, SET_LANGUAGE } from './settingsTypes'

const SettingsContext = createContext()

const initialState = {
  theme: 'light',
  language: 'en',
}

export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(settingsReducer, initialState)

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME })
  }

  const setLanguage = (lang) => {
    dispatch({ type: SET_LANGUAGE, payload: lang })
  }

  return (
    <SettingsContext.Provider value={{ state, toggleTheme, setLanguage }}>
      {children}
    </SettingsContext.Provider>
  )
}

import { TOGGLE_THEME, SET_LANGUAGE } from './settingsTypes'

export const settingsReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      }
  }
}

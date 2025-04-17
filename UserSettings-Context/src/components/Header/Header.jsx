import { useSettings } from '../../context/settings/SettingsContext'
import { useAuth } from '../../context/auth/AuthContext'
import './Header.css'

const Header = () => {
  const { theme, language, toggleTheme } = useSettings()
  const { isAuthenticated, user, logout } = useAuth()

  console.log('Curent Theme: ', theme)

  return (
    <header className={`header ${theme || 'light'}`}>
      <div className="header-content">
        <h1 className="header-title">User Settings</h1>

        <div className="header-info">
          {isAuthenticated && (
            <p className="header-welcome">Welcome, {user.name}!</p>
          )}
          <p className="header-language">Language: {language}</p>
          <p className="header-theme">Theme: {theme}</p>
        </div>

        <div className="header-actions">
          <button className="header-toggle__btn" onClick={toggleTheme}>
            Toggle Theme
          </button>
          {isAuthenticated && (
            <button className="header-logout__btn" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

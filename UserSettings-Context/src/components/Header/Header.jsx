import { useSettings } from '../../context/settings/SettingsContext'
import { useAuth } from '../../context/auth/AuthContext'
import './Header.css'

const Header = () => {
  const { theme, language, toggleTheme } = useSettings()
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <header className={`header ${theme}`}>
      <div className="header-content">
        <h1>User Settings</h1>

        <div className="header-info">
          {isAuthenticated && <p>Welcome, {user.name}!</p>}
          <p>Language: {language}</p>
          <p>Theme: {theme}</p>
        </div>

        <div className="header-actions">
          <button onClick={toggleTheme}>Toggle Theme</button>
          {isAuthenticated && <button onClick={logout}>Logout</button>}
        </div>
      </div>
    </header>
  )
}

export default Header

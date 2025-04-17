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
      </div>
    </header>
  )
}

export default Header

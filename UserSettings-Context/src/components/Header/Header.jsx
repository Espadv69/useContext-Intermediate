import { useSettings } from '../../context/settings/SettingsContext'
import { useAuth } from '../../context/auth/AuthContext'
import './Header.css'

const Header = () => {
  const { theme, language, toggleTheme } = useSettings()
  const { isAuthenticated, user, logout } = useAuth()
}

export default Header

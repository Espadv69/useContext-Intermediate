import { useSettings } from '../../context/settings/SettingsContext'
import { useAuth } from '../../context/auth/AuthContext'
import './SettingsPanel.css'

const SettingsPanel = () => {
  const { language, setLanguage } = useSettings()
  const { isAuthenticated, login } = useAuth()
}

export default SettingsPanel

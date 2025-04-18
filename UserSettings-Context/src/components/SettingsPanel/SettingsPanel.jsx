import { useSettings } from '../../context/settings/SettingsContext'
import { useAuth } from '../../context/auth/AuthContext'
import './SettingsPanel.css'

const SettingsPanel = () => {
  const { language, setLanguage } = useSettings()
  const { isAuthenticated, login } = useAuth()

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value)
  }

  return (
    <section className="settings-panel">
      <h2>Settings Panel</h2>

      <div className="language-selector">
        <label htmlFor="language">Language:</label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </section>
  )
}

export default SettingsPanel

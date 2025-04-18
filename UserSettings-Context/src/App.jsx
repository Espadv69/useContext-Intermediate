import Header from './components/Header/Header'
import SettingsPanel from './components/SettingsPanel/SettingsPanel'
import LoginStatus from './components/LoginStatus/LoginStatus'

const App = () => {
  return (
    <div className="app">
      <Header />
      <SettingsPanel />
      <LoginStatus />
    </div>
  )
}

export default App

import { useAuth } from '../../context/auth/AuthContext'
import './LoginStatus.css'

const LoginStatus = () => {
  const { isAuthenticated, user } = useAuth()

  return (
    <section className="login-status">
      {isAuthenticated ? (
        <p className="status-message">
          ✅ Logged in as <strong>{user.name}</strong>
        </p>
      ) : (
        <p className="status-message">🚫 Not logged in</p>
      )}
    </section>
  )
}

export default LoginStatus

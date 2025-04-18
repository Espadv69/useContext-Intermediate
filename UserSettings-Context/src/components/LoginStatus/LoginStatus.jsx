import { useAuth } from '../../context/auth/AuthContext'
import './LoginStatus.css'

const LoginStatus = () => {
  const { isAuthenticated, user } = useAuth()
}

export default LoginStatus

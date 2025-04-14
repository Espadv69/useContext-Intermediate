import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext.jsx'

import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PageRoutes from './pageRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageRoutes />
  </StrictMode>,
)

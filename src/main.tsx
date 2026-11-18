import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { HashRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider.tsx'
import ThemeProvider from './context/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <AuthProvider>
        <ThemeProvider>
             <App />
        </ThemeProvider>
      </AuthProvider>
    </HashRouter>
  </StrictMode>,
)

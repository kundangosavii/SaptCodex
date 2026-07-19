import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './app/App.jsx'
import Signin from './modules/auth/Signin.jsx'
import Signup from './modules/auth/Signup.jsx'
import Dashboard from './modules/dashboard/Dashboard.jsx'
import ProtectedRoute from './modules/auth/ProtectedRoute.jsx'
import VerifyEmail from './modules/auth/VerifyEmail.jsx'
import { ThemeProvider } from './context/ThemeContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Home from './pages/Home'
import './App.css'

function ThemedApp() {
  const { theme, themeName } = useTheme()
  return (
    <div className="rt" data-theme={themeName} style={theme}>
      <div className="grain" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/projects" element={<Navigate to="/" replace />} />
        <Route path="/hire-me" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

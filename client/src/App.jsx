import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import NavBar from './components/NavBar'
import About from './components/About'
import HireMe from './components/HireMe'
import Projects from './components/Projects'
import './App.css'

function ThemedApp() {
  const { theme } = useTheme()
  return (
    <div style={theme}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hire-me" element={<HireMe />} />
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

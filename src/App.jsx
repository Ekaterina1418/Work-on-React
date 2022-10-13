import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GlobalStyles from './components/styles/Global'
import { UserPage } from './pages/UserPage'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<UserPage />} />
      </Routes>
    </div>
  )
}

export default App

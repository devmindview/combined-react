import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ClientRoute from './client/routes/ClientRoute'
import ScrolltoTop from './client/components/elements/ScrolltoTop'

function App() {
  return (
    <>
      <Router>
        <ScrolltoTop />
        <Routes>
          <Route path='/*' element={<ClientRoute />} />
          <Route
            path="/admin-access"
            element={<Navigate to="https://combined.pythonanywhere.com/admin/" replace />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
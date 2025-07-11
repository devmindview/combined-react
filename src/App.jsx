import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ClientRoute from './client/routes/ClientRoute'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/*' element={<ClientRoute/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
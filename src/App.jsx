import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ClientRoute from './client/routes/ClientRoute'
import ScrolltoTop from './client/components/elements/ScrolltoTop'

function App() {
  return (
    <>
    <Router>
      <ScrolltoTop/>
      <Routes>
        <Route path='/*' element={<ClientRoute/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
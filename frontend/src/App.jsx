import React from 'react'
import { Routes, Route } from 'react-router'
import NoteDetailPage from './pages/NoteDetailPage'
import HomePage from './pages/HomePage'
import CreatePage from './pages/createPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/:id" element={<NoteDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App
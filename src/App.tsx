import React from 'react'

import { Editor } from './components/Editor'

import './App.scss'

function App() {
  return (
    <div className="page">
      <div className="top-bar-thing"></div>

      <h1 style={{ margin: '2rem 0' }}>GH Pixelz</h1>

      <Editor />
    </div>
  )
}

export default App

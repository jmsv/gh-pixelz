import React from 'react'

import { Editor } from './components/Editor'
import { Logo } from './components/Logo'

import './App.scss'

function App() {
  return (
    <div className="page">
      <div className="top-bar-thing"></div>

      <div className="header">
        <div className="logo">
          <Logo />
        </div>

        <div className="text">
          <h1>GH Pixelz</h1>
          <p>Generate pixel art in the style of the GitHub contributions chart</p>
        </div>
      </div>

      <Editor />
    </div>
  )
}

export default App

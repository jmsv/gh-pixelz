import React, { useState } from 'react'

import { Editor } from './components/Editor'
import { Logo } from './components/Logo'

import './App.scss'

function App() {
  const [mouseIsDown, setMouseIsDown] = useState(false)

  const handleEvent = (event: any) => {
    if (event.type === 'mousedown') {
      setMouseIsDown(true)
    } else {
      setMouseIsDown(false)
    }
  }

  return (
    <div className="page" onMouseUp={handleEvent} onMouseDown={handleEvent}>
      <div className="top-bar-thing"></div>

      <div className="header">
        <div className="logo">
          <Logo />
        </div>

        <div className="text">
          <h1>GH Pixelz</h1>
          <p>github-chart pixel-art</p>
        </div>
      </div>

      <Editor mouseIsDown={mouseIsDown} />

      <div className="footer">
        <p>
          this thing is on{' '}
          <a href="https://github.com/jmsv/gh-pixelz" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </div>
  )
}

export default App

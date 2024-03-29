import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Quiz from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Quiz />
    </BrowserRouter>
  </React.StrictMode>,
)

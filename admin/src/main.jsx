import React from 'react'
import {createRoot} from 'react-dom/client'
import '../src/index.css'
import App from '../src/App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

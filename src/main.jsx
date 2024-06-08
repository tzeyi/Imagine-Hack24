import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AccessProvider } from './components/AccessContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AccessProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AccessProvider>
  </React.StrictMode>,
)

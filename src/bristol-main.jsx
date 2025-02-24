import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bristol from './bristol.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Bristol />
    </StrictMode>,
  )
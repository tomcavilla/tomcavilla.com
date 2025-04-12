import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Severn from './severn.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Severn />
    </StrictMode>,
  )
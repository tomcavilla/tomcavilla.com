import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Exmouth from './exmouth.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Exmouth />
    </StrictMode>,
  )
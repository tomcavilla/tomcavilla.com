import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CarlyonBay from './carlyonbay.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <CarlyonBay />
    </StrictMode>,
  )
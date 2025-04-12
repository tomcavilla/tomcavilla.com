import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CarlyonBay from './carlyon-bay.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <CarlyonBay />
    </StrictMode>,
  )
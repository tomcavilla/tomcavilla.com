import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BJJ2 from './bjj2.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BJJ2 />
    </StrictMode>,
  )
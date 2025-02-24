import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BJJ from './bjj.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BJJ />
    </StrictMode>,
  )
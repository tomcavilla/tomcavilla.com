import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Topsham from './topsham.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Topsham />
    </StrictMode>,
  )
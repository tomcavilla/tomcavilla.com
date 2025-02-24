import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mevagissey from './mevagissey.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Mevagissey />
    </StrictMode>,
  )
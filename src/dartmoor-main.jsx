import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dartmoor from './dartmoor.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Dartmoor />
    </StrictMode>,
  )
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Gallery from './gallery-page.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Gallery />
    </StrictMode>,
  )
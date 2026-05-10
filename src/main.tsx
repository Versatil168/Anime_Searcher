import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AnimeApp } from './AnimeApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnimeApp />
  </StrictMode>,
)

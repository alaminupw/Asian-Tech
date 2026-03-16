import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'                          // ✅ LAST
import 'bootstrap/dist/css/bootstrap.min.css';
import '@flaticon/flaticon-uicons/css/all/all.css';

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

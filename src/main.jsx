import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import CreatePost from './pages/CreatePost.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/new" element={<CreatePost />} />
      </Routes>    
    </BrowserRouter>
  </StrictMode>,
)

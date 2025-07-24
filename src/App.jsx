import { useState } from 'react'
import './App.css'
import CreatePost from './pages/CreatePost'
import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Post your daily thoughts here!
      </h1>
      <div>
        <button><Link to = "/new">Create Post</Link></button>
      </div>
    </>
  )
}

export default App

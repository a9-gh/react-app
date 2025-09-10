import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <h1 className="heading">Hello World!</h1>
      <p>This is my first React app.</p>
    </>
  )
}

export default App

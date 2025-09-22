import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <Counter/>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button 
        onClick={ () => setCount( prev => prev + 1 ) }>
          증가
      </button>
    </div>
  )
}

export default App

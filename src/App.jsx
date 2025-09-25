import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

  return (
    <div>
      <Counter
      count = {count1}
      onLIncrement = {() => setCount1(prev => prev + 1) }/>
      
      <Counter
      count = {count2}
      onLIncrement = {() => setCount2(prev => prev + 1) }/>

    </div>
  )
}

function Counter({count , onLIncrement}) {
  //const [count, setCount] = u  
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={onIncrement}>
        증가
      </button>
    </div>
  )

}

export default App

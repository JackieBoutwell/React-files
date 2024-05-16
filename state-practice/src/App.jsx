import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  const add = () => {
   setCount(count + 1)

    // use updated function to make sure it updates. But with the updater function it ques the callback functions and then uses the actual current stat value each time.
    //setCount((count) => count+3)
    // goes up by three
  }
  
  console.log('render')

  return (
    <>
      Hello, (from React)
      <h1>{count}</h1>
      <button onClick={add}>Add</button>
      <p> ||||||||||</p>
      <Gallery />
    
    </>
  
    // <>
      /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> */
  )
}

export default App

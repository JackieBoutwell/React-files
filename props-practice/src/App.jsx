import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Welcome from './components/Welcome'
import Image from './components/Image'


function App() {

   

  return (
    <>
      <div>

        <image src='{viteLogo}' alt='Vite logo' href='https://vitejs.dev'/>
        <image src='{reactLogo}' alt='React logo' href='https://react.dev'/>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Welcome name="Bob" />

      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
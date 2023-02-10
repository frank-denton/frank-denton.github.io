import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import reactLogo from './../../assets/react.svg'



function Vite() {
    const [count, setCount] = useState(0)

  return (
    <div className="App text-light">
      <h1>This Website was made using:</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React</h2>
      <div className="card bg-dark">
        <Button onClick={() => setCount((count) => count + 1)} variant='secondary'>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default Vite
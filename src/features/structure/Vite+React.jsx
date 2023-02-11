import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import reactLogo from './../../assets/react.svg'
import './../../App.css'



function Vite() {
    const [count, setCount] = useState(0)

  return (
    <div className="App text-light">
      <h1>This Website was made using:</h1>
      <br></br>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <br></br>
      <h2>Vite + React</h2>
      <br></br>
      <div className="bg-dark">
        <Button onClick={() => setCount((count) => count + 1)} variant='secondary'>
          count is {count}
        </Button>
        <br></br>
        <br></br>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <br></br>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default Vite
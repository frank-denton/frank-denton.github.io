//Packages
import Button from 'react-bootstrap/Button'
import { Outlet, useLocation } from 'react-router-dom'

//Styles
import './App.css'

//Components
import NavigationBar from './features/Navbar/NavigationNar'
import Vite from './features/structure/Vite+React'
import ErrorPage from './features/ErrorPage/error-page'
import About from './features/about/About'

function App() {
  const getURL = useLocation();
  console.log(getURL.pathname);

  return (
    <div className="bg-dark text-light">
      <NavigationBar />
      <div id="detail">
        <Outlet />
      </div>
      {getURL.pathname === '/' && <About />}
    </div>
  )
}

export default App

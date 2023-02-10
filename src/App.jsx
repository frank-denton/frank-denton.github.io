//Packages
import Button from 'react-bootstrap/Button'
import { Outlet } from 'react-router-dom'

//Styles
import './App.css'

//Components
import NavigationBar from './features/Navbar/NavigationNar'
import Vite from './features/structure/Vite+React'
import ErrorPage from './features/ErrorPage/error-page'

function App() {

  return (
    <div className="bg-dark text-light">
      <NavigationBar />
      <div id="detail">
        <Outlet />
      </div>
      <h1>Welcome!</h1><br></br>
      <h2>This website was create by: Frank Denton</h2><br></br>
      <div className='about'>
        <h4>About me:</h4>
        <p className='text-info'>I am currently attending Totino-Grace High School as a Senior. During my time here, I have been involved in great college-prep classes and opportunities. I have been in First Robotics Competition for 4 years, where I have learned how to program and create solutions to unique challenges every year. This year I am working on computer vision for the robot. During Robotics, I was able to meet some amazing sponsors at Delkor and Minnetronix. I also attended the E3 institute where I learned the design process, and how to think critically and execute solutions. I was also able to get real-world experience with a mentor. I was able to shadow him at work and learn about the complexity and management it takes to design the products we use every day.  I am currently a part of S.O.A.R., a leadership group where I have learned how to be a servant leader and how to focus on my mentality to help our team. Outside of School, I am working at Dairy Queen where I am able to learn how to work in a fast-paced environment with others.</p>
        <br></br>
        <h4>Education:</h4>
        <p className='text-info'>Totino-Grace High-School</p>
        <p className='text-info'>2019-2023</p>
        <br></br>
        <h4>Skills:</h4>
        <p className='text-info'>Leadership</p>
        <p className='text-info'>Engineering</p>
        <p className='text-info'>JavaScript</p>
        <p className='text-info'>Java</p>
      </div>
    </div>
  )
}

export default App

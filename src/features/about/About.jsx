//Global
import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

//Local
import profile from './../../assets/frank-denton-square.png'


function About() {
  return (
    <Container fluid>
        <br></br>
        <h1>Welcome!</h1><br></br>
        <h2>This website was created by: Frank Denton</h2><br></br><br></br>
        <Row className='d-flex align-items-center'>
            <Col xs={6}>
                <Image src={profile} roundedCircle></Image>
            </Col>
            <Col xs={5} className='align-middle'>
                <h4>About me:</h4>
                <br></br>
                <p className='text-info'>I am currently attending Totino-Grace High School as a Senior. During my time here, I have been involved in great college-prep classes and opportunities. I have been in First Robotics Competition for 4 years, where I have learned how to program and create solutions to unique challenges every year. This year I am working on computer vision for the robot. During Robotics, I was able to meet some amazing sponsors at Delkor and Minnetronix. I also attended the E3 institute where I learned the design process, and how to think critically and execute solutions. I was also able to get real-world experience with a mentor. I was able to shadow him at work and learn about the complexity and management it takes to design the products we use every day.  I am currently a part of S.O.A.R., a leadership group where I have learned how to be a servant leader and how to focus on my mentality to help our team. Outside of School, I am working at Dairy Queen where I am able to learn how to work in a fast-paced environment with others.</p>
            </Col>
        </Row>

        <br></br>

        
        <div className='about text-info'>
            <h4 className='text-light'>Education:</h4>
            <h5 >St. John the Baptist Catholic School</h5>
            <p >2008-2019</p>
            <br></br>
            <h5>Totino-Grace High-School</h5>
            <p >2019-2023</p>
            <br></br>
            <h4 className='text-light'>Skills:</h4>
            <h5 >Leadership:</h5>
            <p>S.O.A.R. leadership group at Totino-Grace.</p>
            <br></br>
            <h5 >Engineering:</h5>
            <p>Experimental Engineering Education (E3) program.</p>
            <br></br>
            <h5 >JavaScript:</h5>
            <p>Senior Year Capstone Project</p>
            <ul>
                <li>React</li>
                <li>Redux</li>
                <li>NodeJS</li>
            </ul>
            <h5 >Java:</h5>
            <p>Robotics and AP Computer Science.</p>
        </div>

    </Container>
  )
}

export default About
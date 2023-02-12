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
            <Col md>
                <Image width="100%" hight="100%" src={profile} roundedCircle></Image>
            </Col>
            <Col md className='align-middle'>
                <h4>About me:</h4>
                <br></br>
                <p className='text-info'>I am currently attending Totino-Grace High School as a Senior. During my time here, I have been involved in great college-prep classes and opportunities. I have been in First Robotics Competition for 4 years, where I have learned how to program and create solutions to unique challenges every year. This year I am working on computer vision for the robot. During Robotics, I was able to meet some amazing sponsors at Delkor and Minnetronix. I also attended the E3 institute where I learned the design process, and how to think critically and execute solutions. I was also able to get real-world experience with a mentor. I was able to shadow him at work and learn about the complexity and management it takes to design the products we use every day. Outside of class, I play soccer in the fall, swim in the winter, and run track in the spring. This year I was elected captain of my swim team and my coach recommended me for the S.O.A.R. leadership group at Totino-Grace. I also participate in Trapshooting and Mountain Biking with my Dad and the School. Outside of School, I am working at Dairy Queen where I am able to learn how to work in a fast-paced environment with others. Every summer since 8th grade I have gone to Extreme Faith Camp (EFC) or Catholic Youth Summer Camp (CYSC). I have been able to build and deepen my relationship through the camp, and in the last three years, I have been able to help middle schoolers deepen their relationship. During High School, I have been able to create a well-rounded base of skills that will only continue to grow in the future. I hope to pursue a Computer Engineering Degree, and use my talents to create technology that helps to create a brighter future.</p>
            </Col>
        </Row>

        <br></br>

        
        <div className='about text-info'>
            <h4 className='text-light'>Education:</h4>
            <h5><a href='https://stjohnnyb.org/' className='text-info' target="_blank" rel="noopener noreferrer">St. John the Baptist Catholic School</a></h5>
            <p >2008-2019</p>
            <br></br>
            <h5><a href='https://www.totinograce.org/' className='text-info' target="_blank" rel="noopener noreferrer">Totino-Grace High-School</a></h5>
            <p >2019-2023</p>
            <br></br>
            <h4 className='text-light'>Skills:</h4>
            <h5 ><a href='https://www.totinograce.org/activities/clubs' className='text-info' target="_blank" rel="noopener noreferrer">Leadership:</a></h5>
            <p>S.O.A.R. leadership group at Totino-Grace.</p>
            <p>Swim Team Captain</p>
            <br></br>
            <h5 ><a href='https://www.totinograce.org/academics/engineering-institute' className='text-info'  target="_blank" rel="noopener noreferrer">Engineering:</a></h5>
            <p>Experimental Engineering Education (E3) program.</p>
            <br></br>
            <h5 >JavaScript:</h5>
            <p>Senior Year Capstone Project</p>
            <ul>
                <li>React</li>
                <li>Redux</li>
                <li>NodeJS</li>
            </ul>
            <br></br>
            <h5 >Java:</h5>
            <p>Robotics and AP Computer Science.</p>
        </div>

    </Container>
  )
}

export default About
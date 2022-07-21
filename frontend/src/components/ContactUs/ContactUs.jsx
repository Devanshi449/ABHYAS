import { Link } from 'react-router-dom'
import { Button,Alert,Card} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import NavigationBar from '../Global/NavigationBar'
import LandingCard from "../Landing/LandingCard";
// import "./TeacherDashboard.css";

function ContactUs() 
{
    return (
        
        <div>
           <NavigationBar/>
           <div className="mainHeading">
              {/* <Alert className='headerbox text-center'>Teacher Dashboard</Alert> */}
              <h1 className='text-center'><b>Contact Us</b></h1>
          </div>

            <div className="horizontalBox">
                <Container class='mt-60'>
                    <Row  lg={3} className="g-4 ">
                        <Col className='d-flex justify-content-center mt-20'>
                            <div className="imagesOne">
                                <LandingCard  imgSource="src\components\ContactUs\Harshit.jpg" link='/contribute' title='Harshit Jain'/>
                                <Card.Link style={{marginLeft:"6.5rem"}} href="https://www.linkedin.com/in/harshitjain01/">Linked In profile</Card.Link>
                            </div>
                            
                        </Col>

                        <Col className='d-flex justify-content-center'>
                            <div>
                                <LandingCard imgSource="src\components\ContactUs\sagar.jpg" link='/GenerateQPaper' title='Sagar Jaiswal'/>
                                <Card.Link style={{marginLeft:"6rem"}} href="https://www.linkedin.com/in/sagar-jaswal-3b4070201/">Linked In profile</Card.Link>
                            </div>
                           
                        </Col>
                        
                        <Col className='d-flex justify-content-center'>
                            <div>
                                   <LandingCard imgSource="src\components\ContactUs\tanishq.jpg" link='/qBank' title='Tanish Chugh'/>
                                   <Card.Link style={{marginLeft:"6rem"}} href="https://www.linkedin.com/in/tanishchugh01/">Linked In profile</Card.Link>
                            </div>
                            
                        </Col>

                        <Col className='d-flex justify-content-center mt-20'>
                            <div className="imagesOne">
                                <LandingCard  imgSource="src\components\ContactUs\devanshi.jpg" link='/contribute' title='Devanshi Gupta'/>
                                
                                <Card.Link style={{marginLeft:"6rem"}} href="https://www.linkedin.com/in/devanshi-gupta-29587b214/">Linked In profile</Card.Link>

                            </div>
                            
                        </Col>

                        <Col className='d-flex justify-content-center'>
                            <div>
                            <LandingCard imgSource="src\components\ContactUs\shivangi.jpg" link='/GenerateQPaper' title='Shivangi Singh'/>
                            <Card.Link style={{marginLeft:"6rem"}} href="https://www.linkedin.com/in/shivangi-singh-4686b5206/">Linked In profile</Card.Link>

                            </div>
                            
                        </Col>
                        
                        <Col className='d-flex justify-content-center'>
                            <div>
                               <LandingCard imgSource="src\components\ContactUs\Harsh.jpg" link='/qBank' title='Harsh Kumar'/>
                               <Card.Link style={{marginLeft:"6rem"}} href="https://www.linkedin.com/in/harsh-kumar-77v/">Linked In profile</Card.Link>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        
      
    )
}

export default ContactUs
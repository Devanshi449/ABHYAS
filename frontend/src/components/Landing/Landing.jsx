import { Link } from 'react-router-dom'
import { Button,Alert} from 'react-bootstrap' 
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "./Landing.css";
import LandingCard from './LandingCard'
import NavigationBar from '../Global/NavigationBar'

function Landing() {
  return (
    <>
      <NavigationBar/>
        <div style={{display:"flex", justifyContent:"center", marginTop:'8rem'}} >
      <Link to="/contribute"  style={{ textDecoration: 'none' }}>
          <Button className="UploadButton primary">Contribute a Question</Button>
      </Link>
        </div>
      
      <div className="container mt-3">
          <Alert className='headerbox text-center'>Who are you?</Alert>
      </div>
       
      <Container>
        <Row  md={2} className="g-4" style={{marginTop:"40px"}}>
          <Col className='d-flex justify-content-center'>
            <LandingCard  imgSource="src\components\Landing\student.png" link='/StudentDashboard' title='Student'/>
          </Col>

          <Col className='d-flex justify-content-center'>
            <LandingCard imgSource="src\components\Landing\Teacher.png" link='/teacherdashboard' title='Teacher'/>
          </Col>
        </Row>
      </Container>      
    </>
  )
}

export default Landing

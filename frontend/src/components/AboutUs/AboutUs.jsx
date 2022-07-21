import { Button,Alert} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import NavigationBar from '../Global/NavigationBar'
// import LandingCard from "../Landing/LandingCard";
// import "./TeacherDashboard.css";
import "./AboutUs.css";

function AboutUs() 
{
    return (
        
        <div>
           <NavigationBar/>
           <div className="mainHeading">
              {/* <Alert className='headerbox text-center'>Teacher Dashboard</Alert> */}
              <h1 className='text-center'><b>About Us</b></h1>
          </div>

          
          <div className='textbtw'>
              <h1 style={{fontSize:"1.5rem"}}>
                 We help to develop question bank and teachers can generate
                 Question Papers very easily. Students can take part in interactive quizzes.
                 Students can analyze their performance through leaderboard and their is 
                 also a point reward system for extensive paticipation.
              </h1>
          </div>

            
        </div>
        
      
    )
}

export default AboutUs
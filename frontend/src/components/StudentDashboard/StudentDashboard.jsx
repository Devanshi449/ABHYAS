// // import Container from 'react-bootstrap/Container'
// import 'bootstrap/dist/css/bootstrap.min.css'

// // import Row from 'react-bootstrap/Row'
// // import Col from 'react-bootstrap/Col'

// // import NavigationBar from '../Global/NavigationBar'
// // import LandingCard from "../Landing/LandingCard";

// function StudentDashboard() 
// {
//     return 
//     (
//         <div>
//            {/* <NavigationBar/> */}
//            <h1>hello</h1>
//         </div>
        
//     )
// }

// export default StudentDashboard

import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import NavigationBar from '../Global/NavigationBar'
import LandingCard from "../Landing/LandingCard";
// import "./TeacherDashboard.css";

function StudentDashboard() 
{
    return (
        
        <div>
           <NavigationBar/>
           <div className="mainHeading">
              {/* <Alert className='headerbox text-center'>Teacher Dashboard</Alert> */}
              <h1 className='text-center'><b>Student Dashboard</b></h1>
          </div>

            <div className="horizontalBox">
                <Container class='mt-60'>
                    <Row  md={3} className="g-4 ">
                        
                        <div className="Contributepage" style={{marginLeft:"13rem"}}>
                            <Col className='d-flex justify-content-center mt-20'>
                                <div className="imagesOne">
                                    <LandingCard  imgSource="src\components\TeacherDashboard\contribute.png" link='/contribute' title='Contribute A Question'/>
                                </div>
                                
                            </Col> 
                        </div>
                         <div className="QuestionBank">
                         <Col className='d-flex justify-content-center'>
                                <LandingCard imgSource="src\components\TeacherDashboard\qbank.png" link='/qBank' title='Question Bank'/>
                            </Col> 
                         </div>

                            {/* <Col className='d-flex justify-content-center mt-20'>
                                <div className="imagesOne">
                                    <LandingCard  imgSource="src\components\TeacherDashboard\contribute.png" link='/contribute' title='Contribute A Question'/>
                                </div>
                                
                            </Col> */}
                            
                            {/* <Col className='d-flex justify-content-center'>
                                <LandingCard imgSource="src\components\TeacherDashboard\qbank.png" link='/qBank' title='Question Bank'/>
                            </Col> */}
                        
                        
                    </Row>
                </Container>
            </div>
        </div>
        
      
    )
}

export default StudentDashboard
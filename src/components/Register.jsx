import '../App.css'
import React from 'react';
import SignupPage from './SignupPage';
import { Col, Container, Row } from 'react-bootstrap';
const Register = () => {

    return (
        <div>
         <Container>
           <Row>
            <Col xs={6} className="signImg">
            </Col>   
                
            <Col xs={6}>
                <SignupPage/>
            </Col>   
           </Row>  
         </Container>        
        </div>
    )
}

export default Register

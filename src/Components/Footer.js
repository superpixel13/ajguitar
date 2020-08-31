import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
export default function Footer () {
    return (
      <div>
        <Container bg="dark">
          <Row>
            <Col>
            <h1>Follow Us</h1>
            <SocialIcon url="https://www.facebook.com/AJGuitarSetUp" />
            </Col>
            <Col>
            <h5 style={{marginTop:'20px', color:'black'}}>For more info about labor and parts kindly contact us to 09959877457</h5>
            
            </Col>
          </Row>
          <h4 style={{textAlign:'center'}}>Copyright By RJ Sarmiento</h4>
        </Container>
      </div>
    );
}

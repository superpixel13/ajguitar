import React from 'react'
import { Container, Carousel, Col, Row } from 'react-bootstrap'
import r1 from '../AJ Pictures/reviews/review 1.png'
import r2 from '../AJ Pictures/reviews/review 2.png'
export default function FeedbackSection () {
    return (
      <div className="feedbackSection" id='feedbackSec'>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} lg="6">
              <h1 style={{textAlign:'center'}}>Feedbacks</h1>
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={r1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={r2} alt="second slide" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

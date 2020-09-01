import React from 'react'
import { Container, Carousel, Col, Row } from 'react-bootstrap'
import r1 from '../AJ Pictures/reviews/review 1.png'
import r2 from '../AJ Pictures/reviews/review 2.png'
import r3 from '../AJ Pictures/reviews/review 3.png'
import r4 from '../AJ Pictures/reviews/review 4.png'
import r5 from '../AJ Pictures/reviews/review 5.png'
export default function FeedbackSection () {
    return (
      <div className="feedbackSection" id="feedbackSec">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} lg="6">
              <h1 style={{ textAlign: "center" }}>Feedbacks</h1>
              <Carousel>
                {[r1, r2, r3, r4, r5].map((Items) => {
                  return (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={Items}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

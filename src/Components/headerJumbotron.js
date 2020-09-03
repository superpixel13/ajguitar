import React, { useState } from 'react'
import ReactBnbGallery from 'react-bnb-gallery';
import '../App.css';
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Carousel,
  Button,
} from "react-bootstrap";
import img1 from "../AJ Pictures/carouselPic/carousel1.jpg";
import img2 from "../AJ Pictures/carouselPic/carousel5.jpg";
import img3 from "../AJ Pictures/carouselPic/carousel2.jpg";
import img4 from "../AJ Pictures/carouselPic/carousel3.jpg";
import img5 from "../AJ Pictures/carouselPic/carousel4.jpg";
import img6 from "../AJ Pictures/carouselPic/carousel6.jpg";
import Scroll from "react-animate-on-scroll";


function HeaderJumbotron() {
  const Images = [img1, img2, img3, img4, img5, img6];
  const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <Row className="jumbotronTexts">
              <Col xs={12} lg="8">
                <Scroll animateIn="flipInY" animateOut="flipOutY" duration={1}>
                  <h1>
                    A Custom Guitar Shop that Brings the Maximum Potential of
                    Your Guitar with Cheap and Great Quality Services!
                  </h1>
                </Scroll>
                <Scroll
                  delay={1000}
                  animateIn="fadeIn"
                  initiallyVisible={false}
                >
                  <p>
                    CUSTOM ON-THE-GO! Get Priceless Music From Your Guitar By
                    Letting Us Take Care of it, Upgrading Your Guitar With Great
                    Quality for a Cheap Costs. Don't Believe Us? Check Out Our
                    Customer's Feedbacks.
                  </p>
                </Scroll>

                <div >
               
                  <Button style={{marginRight:'5px'}} variant="info" href="#feedbackSec">
                    Feedbacks
                  </Button>{" "}
                  <Button
                    className="galleryBtn"
                    variant="secondary"
                    onClick={() => setIsOpen(true)}
                    style={{textShadow:'2px 2px 2px black'}}
                  >
                    Open Gallery
                  </Button>
                  <ReactBnbGallery
                    show={isOpen}
                    photos={Images}
                    onClose={() => setIsOpen(false)}
                  />
                </div>
                <br />
              </Col>
              <Col xs={12} lg="4">
                <Carousel>
                  {Images.map((Pictures, index) => {
                    return (
                      <Carousel.Item key={index}>
                        <img
                          className="d-block w-100"
                          src={Pictures}
                          alt="First slide"
                          height="550px"
                        />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
}

export default HeaderJumbotron;
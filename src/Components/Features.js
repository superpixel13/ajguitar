import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import fastPic from '../AJ Pictures/speed.gif'
import moneyPic from '../AJ Pictures/money.gif'
export default function Features () {
    return (
      <div className="featureSection">
        <Container>
          <Row style={{textAlign:'center'}}>
            <Col >
            <a href='https://giphy.com/stickers/cat-coko-mixflavor-JpYdtQifMv3SAsnf8j'><img alt='' src={fastPic} height='150'></img></a>
              <h1>Fast Service</h1>
              <p>We Finish Our work As Soon As Possible, Less Than a Week Guaranteed!</p>
            </Col>
            <Col>
            <a href='https://giphy.com/embed/Pn1RPcoduPJ6Tml3pI'><img alt='' src={moneyPic} height='150'></img></a>
              <h1>Affordable</h1>
              <p>Get Most of our products and services for a Fair Price!</p>
            </Col>
            <Col>
            <a href='https://giphy.com/embed/RN8pZFxEqFyAK3tNVs'><img alt='' src='https://media2.giphy.com/media/RN8pZFxEqFyAK3tNVs/giphy.gif?cid=ecf05e47bjibxwxq6qpycfwjpfff7pc100lqfb4iv0s5t8ul&rid=giphy.gif' height='150'></img></a>
              <h1>Efficient</h1>
              <p>Ensures over the Top Quality Service.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

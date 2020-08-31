import React from 'react'
import {
  Col,
  Tab,
  Row,
  Nav,
  ListGroup

} from "react-bootstrap";
import CustomizedDialogs from './DialogBox'
import FullPackage from '../Data/servicesData'
export default function ListItem(props) {
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column ">
              <Nav.Item>
                <Nav.Link eventKey="first">Full Package</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Others</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={10} lg="auto">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <ListGroup horizontal={"lg"}>
                  {FullPackage.map((items) => {
                    return (
                      <ListGroup.Item variant="info">{items}</ListGroup.Item>
                    );
                  })}
                </ListGroup>
                <br />
                <CustomizedDialogs description="For Only 400.00 Pesos You Could Avail All of These Services! What are you waiting for, Visit our shop and let us help your guitar be brand new again!" />
              </Tab.Pane>
              <br />
              <Tab.Pane eventKey="second">
                <ListGroup horizontal={"lg"}>
                  {[{name:'Acoustic bridge Reglue',
                  description:'1000.00 PHP'},
                  {name:'Neck reglue',
                  description:'1000.00 PHP - 2500.00 PHP'},
                  {name:'Shielding',
                  description:'200.00 PHP'},
                  {name:'Refret',
                  description:'1000.00 PHP'},
                  {name:'General Wiring',
                  description:'500.00 PHP'},
                  {name:'Acoustic Pick Up Installation',
                  description:'500.00 PHP'}
                  ].map((items,index) => {
                    return (
                      <div>
                        <ListGroup.Item  variant="info">
                          {items.name}
                          <br />
                          <CustomizedDialogs description={items.description} />
                        </ListGroup.Item>
                      </div>
                    );
                  })}
                </ListGroup>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

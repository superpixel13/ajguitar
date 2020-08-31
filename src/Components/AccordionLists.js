import React from 'react'
import { Container } from "react-bootstrap";
import ListItem from './ListItem'
function AccordionLists () {
    return (
      <div className="showcaseSection">
      <Container fluid >
      <h3>Services Offered</h3>
        <ListItem />
      </Container>
      </div>
    );
}

export default AccordionLists;

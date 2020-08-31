import React from 'react';

import { ListGroup, Accordion, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-router-dom'

function Menu() {
  return (
    <ListGroup>

              <ListGroup.Item as="Button" variant="link">New Releases</ListGroup.Item>
              <Accordion>
              <ListGroup.Item>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Collections
                </Accordion.Toggle>
                

                </ListGroup.Item>
                <Accordion.Collapse eventKey="0">
                  <ListGroup>
                  <ListGroup.Item>Capsule</ListGroup.Item>
                  <ListGroup.Item>Born Broke 2</ListGroup.Item>
                  <ListGroup.Item>Mythology</ListGroup.Item>
                </ListGroup>
                
                </Accordion.Collapse>
              </Accordion>
              <Accordion>
              <ListGroup.Item>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Apparel 
                </Accordion.Toggle>
                

                </ListGroup.Item>
                <Accordion.Collapse eventKey="0">
                  <ListGroup>
                  <ListGroup.Item>T-Shirts</ListGroup.Item>
                  <ListGroup.Item>Sweatshirts</ListGroup.Item>
                  <ListGroup.Item>Bottoms</ListGroup.Item>
                </ListGroup>
                
                </Accordion.Collapse>
              </Accordion>
              <Accordion>
              <ListGroup.Item>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Accessories 
                </Accordion.Toggle>
                

                </ListGroup.Item>
                <Accordion.Collapse eventKey="0">
                  <ListGroup>
                  <ListGroup.Item>Headwear</ListGroup.Item>
                  <ListGroup.Item>Misc</ListGroup.Item>
                </ListGroup>
                
                </Accordion.Collapse>
              </Accordion>
              
              
              
              <ListGroup.Item>Contact Support</ListGroup.Item>
              <ListGroup.Item>About</ListGroup.Item>
            </ListGroup>
  );
}

export default Menu;
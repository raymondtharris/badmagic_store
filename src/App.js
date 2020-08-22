import React from 'react';
import { Container, Col, Row, ListGroup, Accordion, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import {Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HINBrEAREnarYAJJtyMR7lIo4z9FwQPb6AIVohQjOUMtZAqTa63EBPG5jgmktQ25bFOT7tnXzeZrC9Dg21QPfvN00vd0AjUL7');

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
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
            </ListGroup>
          </Col>
          <Col>
            <Row>
              Bad Magic
            
              Display of items
            </Row>
            <Row>
              <Col>
                <Button>Menu</Button>
              </Col>
              <Col>
              </Col>
              <Col>
                <Button>Cart</Button>
              </Col>
            </Row>
          </Col>
          <Col>
          <Row>
              Cart
          </Row>
          <Row>
            items
          </Row>
            <Elements stripe={stripePromise}>
              

            </Elements>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

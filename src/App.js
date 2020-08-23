import React from 'react';
import { Container, Col, Row, ListGroup, Accordion, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu  from './components/menu';
import CheckoutForm from './components/checkoutform';
import './App.css';
import {Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HINBrEAREnarYAJJtyMR7lIo4z9FwQPb6AIVohQjOUMtZAqTa63EBPG5jgmktQ25bFOT7tnXzeZrC9Dg21QPfvN00vd0AjUL7');
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://uo4ksvhnf9.execute-api.us-east-1.amazonaws.com/dev/graphqlHandler'
  })
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Menu></Menu>
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
                <CheckoutForm></CheckoutForm>

              </Elements>
            </Col>
          </Row>
        </Container>
      </div>
    </ApolloProvider>
  );
}

export default App;

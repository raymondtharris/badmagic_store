import React from 'react';
import { Container, Col, Row, ListGroup, Accordion, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu  from './components/menu';

import './App.css';

import {loadStripe} from '@stripe/stripe-js';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import { CartContext, ItemContext } from './components/appContext';
import Cart from './components/cart';

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
      <CartContext.Provider value="test">
        <div className="App">
          <Container>
            <Row>
              <ItemContext.Provider value="new releases">
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
              </ItemContext.Provider>
              <Col>
                <Cart options={stripePromise}></Cart>
              </Col>
            </Row>
          </Container>
        </div>
      </CartContext.Provider>
    </ApolloProvider>
  );
}

export default App;

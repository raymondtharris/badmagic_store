 import React, { useContext } from 'react';

import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './checkoutform';
import { CartContext } from './appContext';

function Cart(props){
    const cart = useContext(CartContext);
    return (
        <Container>
            <Row>
                Cart
            </Row>
            <Row>       
            {cart}
            </Row>
            <Elements stripe={props.options}>
                <CheckoutForm></CheckoutForm>

            </Elements>
        </Container>
    );
}

export default Cart;
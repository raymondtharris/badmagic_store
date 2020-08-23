import React,{useState} from 'react';

import { Container,Row, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery, gql } from '@apollo/client';
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
//import { Link } from 'react-router-dom'
import CheckoutField from './checkoutfield';

const cardElementOptions = {
    style: {
      base:{
        fontSize: '16px',
        color: '#fff',
        "::placeholder": {
          color: '#87bbfd'
        }
      },
      invalid:{
        color: '#FFC7EE',
        iconColor: "#FFC7EE"
      }
    },
    hidePostalCode: true
  }

function CheckoutForm() {
  return (
    <div>
        <Form>
            <Form.Group controlId="shippingDetails">
                <Row>
                    Shipping Details
                </Row>
                <CheckoutField label="Name" name="ShippingName" type="text" placeholder="John Doe" />
                <CheckoutField label="Address" name="ShippingAddress" type="text" placeholder="123 Rodeo Dr" />
                <CheckoutField label="City" name="ShippingCity" type="text" placeholder="Los Angeles" />
                <CheckoutField label="State" name="ShippingState" type="text" placeholder="California" />
                <CheckoutField label="Zip" name="ShippingZip" type="text" placeholder="94321" />
                
            </Form.Group>

            <Form.Group controlId="billingDetails">
                <Row>
                    Billing Details
                </Row>
                <CheckoutField label="Name" name="BillingName" type="text" placeholder="John Doe" />
                <CheckoutField label="Address" name="BillingAddress" type="text" placeholder="123 Rodeo Dr" />
                <CheckoutField label="City" name="BillingCity" type="text" placeholder="Los Angeles" />
                <CheckoutField label="State" name="BillingState" type="text" placeholder="California" />
                <CheckoutField label="Zip" name="BillingZip" type="text" placeholder="94321" />
                
            </Form.Group>
            <Row>
                <Container>
                    <CardElement options={cardElementOptions}></CardElement>
                </Container>
            </Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  );
}

export default CheckoutForm;
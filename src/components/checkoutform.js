import React,{useState} from 'react';

import { Container,Row, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLazyQuery, gql } from '@apollo/client';
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
//import { Link } from 'react-router-dom'
import CheckoutField from './checkoutfield';
import useForm from './useForm';

const cardElementOptions = {
    style: {
      base:{
        fontSize: '16px',
        color: '#000',
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

  const SECRET_QUERY = gql`
  query BadMagicStripeClientSecretQuery($amount: Int!){
    badMagicStripeClientSecret(amount: $amount){
        clientSecret
    statusCode
    error
    }
  }
  `


function CheckoutForm() {
    const [isProcessing, setProcessingTo] = useState(false);
    const {values, handleChange, handleSubmit} =useForm(tryPayment);
    

    const stripe = useStripe();
    const elements = useElements();

    const [secretQuery, {loading, data}] = useLazyQuery(SECRET_QUERY, {variables: {amount: 50000}, onCompleted: async () => {
        console.log(data.badMagicStripeClientSecret)
        const cardElement = elements.getElement(CardElement);
        console.log(cardElement);

        const billingDetails = {
            name: values.billingName,
            email: values.email,
            address: {
                city: values.billingCity,
                line1: values.billingAddress,
                state: values.billingState,
                postal_code: values.billingZip
            }
        }

        const paymentMethodReq =  await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: billingDetails
        });
        console.log(paymentMethodReq);

        const confirmedCardPayment = await stripe.confirmCardPayment(data.badMagicStripeClientSecret.clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id
        });

        console.log(confirmedCardPayment);
    }});

   

    function tryPayment(){
        console.log(values);
        setProcessingTo(true);
        const shippingDetails = {
            name: values.shippingName,
            address: {
                city: values.shippingCity,
                line1: values.shippingAddress,
                state: values.shippingState,
                postal_code: values.shippingZip
            }
        }

        secretQuery()

    }


    

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="shippingDetails">
                    <Row>
                        Shipping Details
                    </Row>
                    <CheckoutField label="Name" name="ShippingName" type="text" placeholder="John Doe" onChange={handleChange} value={values.shippingName} />
                    <CheckoutField label="Email" name="email" type="email" placeholder="johnd@badmagic.com" onChange={handleChange} value={values.email}/>
                    <CheckoutField label="Address" name="ShippingAddress" type="text" placeholder="123 Rodeo Dr" onChange={handleChange} value={values.shippingAddress}/>
                    <CheckoutField label="City" name="ShippingCity" type="text" placeholder="Los Angeles" onChange={handleChange} value={values.shippingCity} />
                    <CheckoutField label="State" name="ShippingState" type="text" placeholder="California" onChange={handleChange} value={values.shippingState}/>
                    <CheckoutField label="Zip" name="ShippingZip" type="text" placeholder="94321" onChange={handleChange} value={values.shippingZip}/>
                    
                </Form.Group>

                <Form.Group controlId="billingDetails">
                    <Row>
                        Billing Details
                    </Row>
                    <CheckoutField label="Name" name="BillingName" type="text" placeholder="John Doe" onChange={handleChange} value={values.billingName}/>
                    <CheckoutField label="Address" name="BillingAddress" type="text" placeholder="123 Rodeo Dr" onChange={handleChange} value={values.billingAddress}/>
                    <CheckoutField label="City" name="BillingCity" type="text" placeholder="Los Angeles" onChange={handleChange} value={values.billingCity}/>
                    <CheckoutField label="State" name="BillingState" type="text" placeholder="California" onChange={handleChange} value={values.billingState}/>
                    <CheckoutField label="Zip" name="BillingZip" type="text" placeholder="94321" onChange={handleChange} value={values.billingZip}/>
                    
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
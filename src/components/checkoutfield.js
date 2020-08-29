import React,{useState} from 'react';

import { Col, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function CheckoutField(props) {
    return (
        <Form.Group>
            <Row>
                <Col sm="2"><Form.Label >{props.label}</Form.Label></Col>
               <Col sm="10"><Form.Control className="Control"  name={props.name} type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value}/></Col>
            </Row> 
        </Form.Group> 
    );
}

export default CheckoutField;
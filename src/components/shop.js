import React, { useContext } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartContext, ItemContext } from './appContext';
import ShopItem from './shopItem';

function Shop(props){
    const cart = useContext(CartContext);
    return (
        <Container>
            <Row className="textCenter">
                  Bad Magic      
            </Row>
            <Row>
                <ShopItem></ShopItem>
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
        </Container>
    );
}

export default Shop;
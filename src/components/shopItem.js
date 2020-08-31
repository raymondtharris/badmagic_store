import React, { useContext } from 'react';

import { Container, Row, Col, Button, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartContext, ItemContext } from './appContext';

function ShopItem(props){
    
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </Container>
                    <Card.Text>Size Selector radio</Card.Text>
                    <Card.Text>Price</Card.Text>
                    <Button>Add to Cart</Button>
                    <Card.Title> Item Name</Card.Title>
                    <Card.Text>Collection</Card.Text>
                    <Card.Text>Description</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ShopItem;
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from './CardContext';
import { useContext } from 'react';

function productCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="dark">Add to cart</Button>
            </Card.Body>
        </Card>
    )
}
export default productCard;
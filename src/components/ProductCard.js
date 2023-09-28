import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from './CardContext';
import { useContext } from 'react';

function ProductCard(props) {
    let productQuantity = 0;
    const product = props.product;
    const cart = useContext(CartContext);
    productQuantity = cart.getProductQuantity(product.id);
    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                {productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <p>In Cart: {productQuantity}</p>
                            {/* <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label> */}
                            <Col sm="6">
                                <Button variant="dark" sm="6" className="mx-2" onClick={() => {
                                    cart.addOneToCart(product.id);
                                }}>+</Button>
                                <Button variant="dark" sm="6" className="mx-2" onClick={() => {
                                    cart.removeOneFromCart(product.id);
                                }}>-</Button>
                            </Col>
                        </Form>
                    </>
                    :
                    <Button variant="dark" onClick={() => cart.addOneToCart(product.id)}>Add to cart</Button>
                }
            </Card.Body>
        </Card>
    )
}
export default ProductCard;
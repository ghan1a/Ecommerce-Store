import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { productsArray } from '../productStore';
import ProductCard from '../components/ProductCard'

const Home = () => {
    return (
        <>
            <div style={{ marginTop: "150px" }}>
                <h1 align="center" className='p-3'>Welcome to LOGO</h1>
                <Container>
                    <Row xs={1} md={3} className='g-4'>
                        {productsArray.map((product, idx) => (
                            <Col align="center" key={idx}>
                                <ProductCard product={product} />
                            </Col>
                        ))}


                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Home;
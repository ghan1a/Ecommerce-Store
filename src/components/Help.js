import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Help() {
    return (
        <div className="Help ">
            <Container>
                <div className="header ">
                    <h1 align="center" className='p-3'>FAQs</h1>
                    <p>find the answers of frequently asked questions below</p>
                    <hr />
                </div>
                <div className="helpBody d-flex ">
                    <Row>
                        <Col className='g-4'>
                            <p>
                                <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></p>
                            <p> Fusce viverra est erat, et elementum nibh pellentesque in. Sed sollicitudin pretium elit a sodales. Nulla arcu lectus, ultricies quis pretium at, pharetra at diam.</p>
                        </Col>
                        <Col className='g-4 ms-5'>
                            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></p>
                            <p> Fusce viverra est erat, et elementum nibh pellentesque in. Sed sollicitudin pretium elit a sodales. Nulla arcu lectus, ultricies quis pretium at, pharetra at diam.</p>
                        </Col>
                        <Col className='g-4 ms-5'>
                            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></p>
                            <p> Fusce viverra est erat, et elementum nibh pellentesque in. Sed sollicitudin pretium elit a sodales. Nulla arcu lectus, ultricies quis pretium at, pharetra at diam.</p>
                        </Col>
                    </Row>

                    <Row className='mt-3'>
                        <Col className='g-4'>
                            <p>
                                <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></p>
                            <p> Fusce viverra est erat, et elementum nibh pellentesque in. Sed sollicitudin pretium elit a sodales. Nulla arcu lectus, ultricies quis pretium at, pharetra at diam.</p>
                        </Col>
                        <Col className='g-4 ms-5'>
                            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></p>
                            <p> Fusce viverra est erat, et elementum nibh pellentesque in. Sed sollicitudin pretium elit a sodales. Nulla arcu lectus, ultricies quis pretium at, pharetra at diam.</p>
                        </Col>
                        <Col className='g-4 ms-5'>
                            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></p>
                            <p> Fusce viverra est erat, et elementum nibh pellentesque in. Sed sollicitudin pretium elit a sodales. Nulla arcu lectus, ultricies quis pretium at, pharetra at diam.</p>
                        </Col>
                    </Row>
                </div>
            </Container>

        </div>
    )
}

export default Help;
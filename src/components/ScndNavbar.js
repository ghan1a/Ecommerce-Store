import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarTwo = () => {
    return (
        <Navbar expand="lg" className="navbar-nav2 mt-1">
            <Container>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">new borns</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        kids Clothes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">female clothing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                        men's clothing
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">kitchenary</NavDropdown.Item>

                </NavDropdown>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='color-white ms-3'>Deals</Nav.Link>
                        <Nav.Link className='color-white ms-3'>Help</Nav.Link>
                        <Nav.Link className='color-white ms-3'>Sell</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavbarTwo;
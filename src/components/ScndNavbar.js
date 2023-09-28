import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



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
                        <Link className='color-white ms-4 mt-2' to="/Deals">Deals</Link>
                        <Nav.Link className='color-white ms-3'>Sell</Nav.Link>
                        <Link className='color-white ms-4 mt-2' to="/Help">
                            <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#ffffff", }} title="Help" />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavbarTwo;
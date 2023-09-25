import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo.svg"
import login from "../assets/images/login.png"
import cart from "../assets/images/cart.png"
import profile from "../assets/images/profile.png"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SignUp from '../pages/Signup';
import NavbarTwo from './ScndNavbar';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

const Navigation = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="nav-bg-dark navbar-fix-top">
        <Container>
          <Navbar.Brand >
            <div className=" ms-4 mt-1">
              <Link className='color-white' to="/Home">LOGO</Link>
            </div>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Form className="d-flex search ms-2">
                <Form.Control
                  type="search"
                  placeholder="Search categories..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="dark">Search</Button>
              </Form>

              <div className="ms-4 mt-3">
                <Link className='color-white' to="/Login">login</Link>
              </div>

              <div className="cart ms-4 mt-1">
                <Button variant="dark" onClick={handleShow}>Cart</Button>
              </div>

              <NavDropdown className="profile ms-3 mt-2" title="Profile" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action1">view profile</NavDropdown.Item>
                <NavDropdown.Item href="#action2">logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <NavbarTwo />
      </Navbar >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping cart</Modal.Title>
        </Modal.Header>
        <Modal.Body><h5>this is your shoping cart</h5></Modal.Body>

      </Modal>
    </>
  );
}
export default Navigation;
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <div className="main-footer">
                <hr />
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <h3><u>Contact us</u></h3><br />
                            <p>ghania asad</p>
                            <p><a className="color-white mt-0" href={"ghaniyahchaudary@gmail.com"}>ghaniyahchaudary@gmail.com</a></p>
                            <p>0332-8943547</p>
                            <p>Islamabad, Pakistan</p>
                        </div>
                        <div className="col">
                            <h3><u>More about us</u></h3><br />
                            <p><a className="color-white" href={"https://www.facebook.com/ghan1aasad?mibextid=9R9pXO"}>facebook</a></p>
                            <p><a className="color-white" href={"https://instagram.com/ghania._.asad?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="}>instagram</a></p>
                            <p><a className="color-white" href={"https://pin.it/1kJygAP"}>pintrest</a></p>
                            <p><a className="color-white" href={"https://github.com/ghan1a/react-bookingcard.git"}>github</a></p>
                        </div>
                        <div className="col">
                            <h3><u>Subscribe to our Newsletter</u></h3> <br />
                            <form>
                                <label>Enter your e-mail:
                                    <input type="email" />
                                </label>
                                <button className="submit-btn mt-3" onClick={handleShow}>
                                    Submit
                                </button>
                            </form>
                        </div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Body><h5>you have subscribed tou our NewsLetter</h5></Modal.Body>
                        </Modal>
                    </div>
                    <div className="copyright mt-4">
                        <hr />
                        © 2001-2023, LOGO.com, Inc. or its affiliates
                    </div>
                </div>
            </div >
        </Container>
    );
}
export default Footer;
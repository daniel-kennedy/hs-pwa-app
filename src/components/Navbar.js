import React, { useState } from 'react';
import { Button, Nav, Navbar, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
//import Form from 'react-bootstrap/Form';
import { TelephoneOutbound } from 'react-bootstrap-icons';

function MainNavbar() {
    // for hotline modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar  style={{ backgroundColor: '#ece9de' }} className='shadow-lg'>
                <Navbar.Brand href='#home' style={{margin:'0 2rem'}}>
                    <img
                        src='new-county-logo.png'
                        width='60'
                        height='60'
                        className='d-inline-block align-top'
                        alt='County logo'
                    />
                    <Navbar.Text id="navbarTitle" style={{verticalAlign:"middle", fontSize:'1.5rem', fontWeight:'bold', color:'var(--bs-dark)'}}>Washington County, PA</Navbar.Text>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' style={{margin:'0 2rem'}}>
                    <Nav className='ms-auto'>
                        <a href='#home' className='btn btn-danger' onClick={handleShow}>
                            <TelephoneOutbound />&nbsp; Hotlines
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{backgroundColor:"#ece9de"}}>
                    <Modal.Title style={{textAlign:'left'}}>Washington County<br />
                    Department of Human Services
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:"#007575"}}>
                <p className="bg-danger text-light p-2 text-center">
                    <TelephoneOutbound />
                    <h4>HELP CENTER<br /><a href="tel:7242281234" className="text-light">724-228-1234</a></h4>
                </p>
                    <ListGroup id="hotlineList">
                        <ListGroupItem>
                            <a href="tel:1-800-932-0313">
                            Child Abuse Hotline<br /><strong>1-800-932-0313</strong>
                            </a>
                        </ListGroupItem>
                        <ListGroupItem>
                        <a href="tel:724-223-9190">
                            Domestic Violence Hotline<br /><strong>724-223-9190</strong>
                        </a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <a href="tel:1-800-434-4357">
                            Drug and Alcohol Crisis<br /><strong>1-800-GET-HELP</strong>
                            </a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <a href="tel:1-800-373-7888">
                            Human Trafficking<br /><strong>1-888-373-7888</strong>
                            </a>
                            </ListGroupItem>
                        <ListGroupItem>
                            <a href="tel:1-877-225-3567">
                            Mental Health Crisis<br /><strong>1-877-225-3567</strong>
                            </a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <a href="tel:1-800-537-2424">
                            Older Adult Proective Services<br /><strong>1-800-537-2424</strong>
                            </a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <a href="tel:1-800-480-7283">
                            SSTARS Sexual Assault<br /><strong>1-888-480-7283</strong>
                            </a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <a href="tel:1-800-273-8255">
                            Suicide Prevention<br /><strong>988 or 1-800-273-8255</strong>
                            </a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <a href="tel:1-800-273-8255">
                            Veterans Crisis Line<br /><strong>1-800-273-8255 Press 1</strong>
                            </a>
                        </ListGroupItem>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:"#ece9de"}}>
                    <Button variant='danger' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MainNavbar;
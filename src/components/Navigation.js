import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Hockey</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/wednesday">Wednesnight</Nav.Link>
                <Nav.Link href="/friday">Friday</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation

import React from 'react'
import './NavBar.css';

import{Nav,Navbar,FormControl,Form,Button} from 'react-bootstrap'

const NavBar =() => {
      return (
            
      <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
            </Form>
      </Navbar>
      )
}

export default NavBar

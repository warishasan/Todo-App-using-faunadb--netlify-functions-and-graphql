import React, {useState, ReactNode,useContext } from "react"
import {Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'gatsby'
import {identityContext} from '../context/authContext'


interface props {
  children: ReactNode;
}


export default function PageLayout({children}:props) {

  const {user} = useContext(identityContext)


return (
    <div>

<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
  <Navbar.Brand >Todo-App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav className="mr-auto">
      <Nav.Link as = {Link} to = {"/"}>Home</Nav.Link>
      <Nav.Link as = {Link} to = {"/dashboard"}>Dashboard </Nav.Link>
     
    </Nav>
    {!!user &&
    <Nav>
    <Navbar.Text>
      Signed in as: <span>{user.user_metadata.full_name}</span>
    </Navbar.Text>
    </Nav>
    }
  </Navbar.Collapse>
</Navbar>


    <Container fluid>

{children}

</Container>

</div>
)
}



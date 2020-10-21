import React, { ReactNode } from "react"
import {Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'gatsby'


interface props {
  children: ReactNode;
}


export default function PageLayout({children}:props) {

return (
    <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link> <Link to = "/">Home</Link></Nav.Link>
      <Nav.Link> <Link to = "/">Dashboard</Link> </Nav.Link>
     
    </Nav>
    <Nav>
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
</Navbar>


    <Container fluid>

{children}

</Container>

</div>
)
}



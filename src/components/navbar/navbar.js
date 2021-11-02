import {Container, Navbar, Nav} from 'react-bootstrap'

const NavBar = () => {
 return (
   <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#home">Recipe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 )
}

export default NavBar

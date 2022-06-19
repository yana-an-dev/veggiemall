import './App.css';
import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Data from './data'
import Card from './Card'

function App() {
  let [veggies] = useState(Data)
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Veggie Mall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {veggies.map((veggie) => {
            return <Card veggie={veggie} key={veggie.id} />
          })
          }
        </div>
      </div>
    </div>
  );
}

export default App;

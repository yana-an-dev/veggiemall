import './App.css';
import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Data from './data'
import Home from './pages/Home'

function App() {
  let [veggies] = useState(Data)
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Veggie Mall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home veggies={veggies}></Home>} />
        <Route path='detail' element={<div>detilas</div>} />
        <Route path='about' element={<div>about</div>} />
        <Route path='cart' element={<div>cart</div>} />
      </Routes>
    </div>
  );
}

export default App;

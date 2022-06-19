import './App.css';
import React, { useState } from 'react'
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Data from './data'
import Home from './pages/Home'
import Detail from './pages/Detail'
import WrongPage from './pages/WrongPage'
import Event from './pages/Event'

function App() {
  let [veggies] = useState(Data)
  let navigate = useNavigate()


  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Veggie Mall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event') }}>Event</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home veggies={veggies} />} />
        <Route path='detail' element={<Detail veggies={veggies} />} />
        <Route path='about' element={<div>about</div>} />
        <Route path='cart' element={<div>cart</div>} />
        <Route path='event' element={<Event />}>
          <Route path='one' element={<p>Complimentary 1kg of potatoes for the first order!</p>} />
          <Route path='two' element={<p>Free delivery for the first order!</p>} />
        </Route>
        <Route path='*' element={<WrongPage />} />
      </Routes>
    </div>
  );
}

export default App;

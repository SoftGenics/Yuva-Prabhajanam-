import React from 'react'
import './Header.css'
import { Container, Row, Col } from 'react-bootstrap'
const Header = () => {
  return (
    <div>
      <Container fluid className='Header'>
        <Row>
        <Col md={3} className='Header-col-2'>
            <h2>యువ ప్రభంజనం</h2>
          </Col>
          <Col md={5} className='Header-col-1'>
            <img src='images/logo1.png' alt='logo'/>
          </Col>
          <Col md={3}>
            <img src='images/quote.png' alt='quote' />
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Header

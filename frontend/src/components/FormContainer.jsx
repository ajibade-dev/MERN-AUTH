import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FormContainer = ({ children }) => {
  return (
    <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <Row className='w-100 justify-content-center'>
        <Col xs={12} md={6} lg={4} className='card p-4 shadow'>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer

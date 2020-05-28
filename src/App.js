import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row, Form } from 'react-bootstrap';
import InputText from './components/InputText'
import Label from './components/Label'




function App() {
  return (

  <Container id="parent">
    <Row>
      <Col>
        <Form id="child">
          <Form.Group controlId="formBasicEmail">
            <Label />
            <InputText />
            <Button variant="primary" type="submit">
            Submit
          </Button>
          </Form.Group>
        </Form>

      </Col>
    </Row>
  </Container>
  
  );
}

export default App;

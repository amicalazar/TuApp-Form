import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row, Form } from 'react-bootstrap';
import InputText from './components/InputText'
import Label from './components/Label'



//Colors
/* HEX */
// $color1: #ffa69eff; Fondo
// $color2: #faf3ddff;
// $color3: #b8f2e6ff;
// $color4: #fcefefff;
// $color5: #ff6978ff; Fuerte

/* HEX */
// $color1: #6BBAA7; Fondo
// $color2: #faf3ddff;
// $color3: #b8f2e6ff;
// $color4: #fcefefff;
// $color5: #ff6978ff; Fuerte


function App() {
  return (

  <Container className="fluid" id="parent">
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

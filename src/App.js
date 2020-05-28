import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Form} from 'react-bootstrap';
import InputText from './components/InputText'
import Label from './components/Label'
import Titulo from './components/Titulo'
import Contador from './components/Contador'
import Boton from './components/Boton'




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

  const size = 1

  return (

    <Container fluid>
    <Row>
      <Col>
        <Titulo/>
      </Col>
      <Col>
        <Contador/>
      </Col>
    </Row>
    <Row>
      <Col>
        <Container fluid >
          <Form id="child" className="ml-2">
            <Row>
              <Col xs={2}>
              </Col>
              <Col xs={9}>
                <Form.Group controlId="formBasicEmail">
                  <Label />
                  <InputText />
              </Form.Group>
              </Col>
              <Col xs={size}>
                Avance
              </Col>
            </Row>
            <Row id="child">
              <Col xs={11}>

              </Col>
              <Col xs={1} >
                  <Boton />
              </Col>
              
              
            </Row>
            
          </Form>
        </Container>

      </Col>
    </Row>
  </Container>
  
  );
}

export default App;

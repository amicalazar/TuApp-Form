import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Form} from 'react-bootstrap';
import InputText from './components/InputText'
import Label from './components/Label'
import Titulo from './components/Titulo'
import Contador from './components/Contador'
import Boton from './components/Boton'
import { useMediaQuery } from 'react-responsive'



/* HEX */
// $color1: #6BBAA7; Fondo
// $color2: #faf3ddff;
// $color3: #b8f2e6ff;
// $color4: #fcefefff;
// $color5: #ff6978ff; Fuerte


function App() {

  const [step, setStep] = useState(true);
  
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleNext = () => {
    setStep(false);
  }

  return (

    <Container fluid>
      <Row>
        <Col>
          <Titulo isTabletOrMobile = {isTabletOrMobile}/>
        </Col>
        <Col>
          <Contador isTabletOrMobile = {isTabletOrMobile}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container fluid >
            <Form id="child"
              onSubmit={handleNext}
            >
              <Row>
                <Col xs={1} md={2}>
                </Col>
                <Col xs={8} md={8}>
                  <Form.Group controlId="formBasicEmail">
                    <Label 
                      isTabletOrMobile = {isTabletOrMobile}
                    />
                    <InputText 
                      isTabletOrMobile = {isTabletOrMobile}
                      step={step}
                    />
                </Form.Group>
                </Col>
                <Col xs={3} md={2}>
                  Avance
                </Col>
              </Row>
              <Row id="child">
                <Col xs={9} md={10}>

                </Col>
                <Col xs={3} md={2} >
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

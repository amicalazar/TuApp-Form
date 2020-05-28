import React from 'react';
import {Animated} from "react-animated-css";
import { Form } from 'react-bootstrap';

const Label = () => {
    return ( 
        <Animated animationIn="slideInDown" animationOut="slideOutDown" isVisible={true} animationInDuration="400" >
            <Form.Label className="nombre">Email address</Form.Label>
        </Animated>
     );
}
 
export default Label;
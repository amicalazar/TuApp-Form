import React from 'react';
import {Animated} from "react-animated-css";
import { Form } from 'react-bootstrap';


const InputText = () => {
    return ( 
        <Animated animationIn="slideInDown" animationOut="slideOutDown" isVisible={true} animationInDuration="400">
            <Form.Control type="email" placeholder="Enter email" />
        </Animated>
     );
}
 
export default InputText;
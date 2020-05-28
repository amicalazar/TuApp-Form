import React from 'react';
import {Animated} from "react-animated-css";



const Label = () => {
    return ( 
        <Animated animationIn="slideInDown" animationOut="slideOutDown" isVisible={true} animationInDuration="400" >
            <label>Email address</label>
        </Animated>
     );
}
 
export default Label;
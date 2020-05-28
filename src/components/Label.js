import React from 'react';
import {Animated} from "react-animated-css";



const Label = ({font}) => {
    return ( 
        <Animated animationIn="slideInDown" animationOut="slideOutDown" isVisible={true} animationInDuration="400" >
            <label style={{fontSize: {font}}}>Email address</label>
        </Animated>
     );
}
 
export default Label;
import React from 'react';
import {Animated} from "react-animated-css";



const Label = ({isTabletOrMobile}) => {
    


    return ( 
        <Animated animationIn="slideInDown" animationOut="slideOutDown" isVisible={true} animationInDuration="400" >
            <label style={ isTabletOrMobile ? { fontSize:'30px'} : {fontSize:'50px'}}>
                Cual es tu mail?
            </label>
        </Animated>
     );
}
 
export default Label;
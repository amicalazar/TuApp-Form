import React from 'react';
import {Animated} from "react-animated-css";
import styled from '@emotion/styled';

const InputData = styled.input`
    width:100%;
    background-color: transparent;
    border-bottom: 5px solid #A0E8AF;
    border-top: none;
    border-left: none;
    border-right: none;
    font-size:50px;
    color: #FFD23F;
`;

const InputText = () => {
    return ( 
        <Animated animationIn="slideInDown" animationOut="slideOutDown" isVisible={true} animationInDuration="400">
            <InputData type="email" placeholder="Enter email" />
        </Animated>
     );
}
 
export default InputText;
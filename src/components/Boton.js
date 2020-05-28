import React from 'react';
import { Button } from 'react-bootstrap';
import styled from '@emotion/styled';

const DivBoton = styled.div`
    display: flex;
    margin-top: 3rem;
    margin-bottom: 1rem;
    align-items: bottom;
`;



const Boton = () => {
    return ( 
        <DivBoton>
            <Button 
                variant="primary" 
                type="submit"
                >
                Submit
            </Button>
        </DivBoton>
     );
}
 
export default Boton;
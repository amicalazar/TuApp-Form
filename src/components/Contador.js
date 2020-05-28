import React from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
    padding-right: 1rem;
`;

const Contador = () => {
    return ( 
        <Campo className="row justify-content-end">
            <h1>TuApp</h1>
        </Campo>
     );
}
 
export default Contador;
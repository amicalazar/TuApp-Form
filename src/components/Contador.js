import React from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
    padding-right: 1rem;
`;

const Contador = (isTabletOrMobile) => {
    return ( 
        <Campo className="row justify-content-end" >
            <h1 style={ isTabletOrMobile ? { fontSize:'30px'} : {fontSize:'50px'}}>TuApp</h1>
        </Campo>
     );
}
 
export default Contador;
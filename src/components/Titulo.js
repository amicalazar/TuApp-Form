import React from 'react';

const Titulo = (isTabletOrMobile) => {
    return ( 
        <div>
          <h1 style={ isTabletOrMobile ? { fontSize:'30px'} : {fontSize:'50px'}}>TuApp</h1>
        </div> 
     );
}
 
export default Titulo;
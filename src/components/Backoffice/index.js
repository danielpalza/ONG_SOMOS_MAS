import React from 'react';
import Administrator from './Administrator/Administrator';
import Users from './Administrator/Users/Users';

const BackOffice = (rol) =>{
    return(
        <div>
            {
                rol === 'admin' && <Administrator />
            }
            {
                rol === 'user' && <Users />
            }
        </div>
    )
}

export default BackOffice;
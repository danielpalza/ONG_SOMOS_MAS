import React, {useEffect, useState} from 'react';
import s from './Users.module.css';
import axios from 'axios';
import {getHttpRequest} from '../../../../helper/axios/index.js';
const Users = () =>{
    const [users, setUsers] = useState('')
    const config = {
        headers: {
            roleId: 'Admin'
        }
    }
    useEffect(() => {
        getHttpRequest('http://localhost:3001/users')
        .then(({data}) => console.log(data))
        .catch(error => console.log(error))
    }, [])
    return(
        <div className={s.container}>
            <div className={s.user}>
            Hola soy usuarios
{/*                 {
                    users !== '' &&
                    users.map(user=>{
                        <p>
                            {user}
                        </p>
                    })
                } */}
            </div>
        </div>
    )
}

export default Users;
import React, { useEffect } from 'react'
import axios from 'axios';
import s from './Information.module.css';

const Information = () => {
     useEffect(() =>{
        axios.get('http://localhost:3001/')
        .then(r=> console.log(r))
        .catch(error => console.log(error))
    }, []) 
    return(
        <div>
            <div className={s.container}>
                <div className={s.info}>
                    Hola soy Information
                </div>
            </div>
        </div>

    )

}

export default Information;
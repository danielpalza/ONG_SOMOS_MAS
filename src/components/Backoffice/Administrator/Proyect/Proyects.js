import React,{useEffect} from 'react';
import s from './Proyects.module.css';
import axios from 'axios';

const Proyect = () =>{
    
/*     useEffect(() => {
        axios.get('http://localhost:3001/')
        .then(r => console.log(r))
        .catch(error => console.log(error))
    }, []) */

    return(
        <div>
            <div className={s.container}>
                <div className={s.cards}>
                Hola soy proyect
                </div>
            </div>
        </div>
    )
}

export default Proyect;
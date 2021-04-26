import React, { useEffect, useState } from 'react';
import s from './Administrador.module.css';
import axios from 'axios';
import Information from './InfoPublic/Information';
import Users from './Users/Users';
import Content from './Content/Content';
import Proyect from './Proyect/Proyects';
import Comunication from './Comunication/Comunication';

const Administrator = () => {
    const [news, setNews] = useState('')
    const [show, setShow] = useState({
        info: true,
        content: false,
        users: false, 
        proyects: false,
        comunications: false
    })
/*     useEffect(() =>{
        axios.get('http://localhost:3001/news')
        .then(({data}) => setNews(data))
    },[]) */
    const onShow = (e) =>{
        setShow({
            [e.target.name] : true
        })
    }
    return(
        <div>
            <div className={s.banner}>
                Aqui va el banner
            </div>
            <div className={s.container}>
                <div className={s.columnLeft}>
                    <div className={s.header}>
                        Welcome Administrator
                    </div>
                    <div className={s.buttons}>
                        <button name="info"             onClick={(e) => onShow(e)}>Public Information   </button>
                        <button name="content"          onClick={(e) => onShow(e)}>Content              </button>
                        <button name="users"            onClick={(e) => onShow(e)}>Users                </button>
                        <button name="proyects"         onClick={(e) => onShow(e)}>Proyects             </button>
                        <button name="comunications"    onClick={(e) => onShow(e)}>Comunications        </button>
                    </div>
                </div>
                <div className={s.columnRigth}>
                    {
                        show.info &&            <Information />
                    }
                    {
                        show.content &&         <Content />
                    }
                    {
                        show.users &&           <Users />
                    }
                    {
                        show.proyects &&        <Proyect />
                    }
                    {
                        show.comunications &&   <Comunication />
                    }
                    <button>
                        Home
                    </button>
                </div>
            </div>
            <div className={s.footer}>
                Aqui va el footer
            </div>
        </div>
    )
}

export default Administrator;
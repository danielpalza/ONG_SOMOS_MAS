import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {getHttpRequest} from '../../helper/axios/index';

export default function ContactList(){
    const [contacts, setContacts] = useState([]);

    const getContacts = () => {
        getHttpRequest('/contacts')
            .then(res => setContacts(res.data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getContacts();
    }, []);

//Nombre de tabla: contacts. Contendrá los campos name, phone, email, message, deletedAt 
    return(
        contacts.length > 0 ? 
            <table className="table m-auto w-75">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>message</th>
                    </tr>
                </thead>
                    {
                        contacts.map(contact => {
                            return(
                                <tr>
                                    <td className="text-left">{contact.name}</td>
                                    <td className="text-left">{contact.phone}</td>
                                    <td className="text-left">{contact.email}</td>
                                    <td className="text-left">{contact.message}</td>
                                </tr>
                            )
                        })
                    }
            </table>
        :
        <h2 className="w-50 m-auto mt-3">There isn't any contacts registered yet</h2>
    );
}
import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import validationSchema from './validationSchema';
import { getHttpRequest } from '../../../helper/axios';
import ROLES from './testRole.json';
import USER from './testUser.json';
import USER_LOGGED from './testUserLogged.json';
import ErrorAlert from '../ErrorAlert';
import SucessAlert from '../SucessAlert';

import Loader from '../../../components/Loader';
function EditUserForm({ userId }) {
  const USER_URL = `${process.env.REACT_APP_API_URL}/users`;
  const ROLE_URL = `${process.env.REACT_APP_API_URL}/role`;
  const [user, setUser] = useState();
  const [roles, setRoles] = useState([]);
  //Add state to handle a succesfully request  until a global state is implemented
  const [success, setSucces] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    //# TODO: Test when enpdoint of roles is implemented.
    /* 
        const getAllRoles= async()=>{
            try{
                const allRoles = await getHttpRequest(ROLE_URL)
                if (allRoles) {
                setRole(allRoles.map(rol => {
                    const { name, id: value } = rol
                    return { name, value }
                }))
                
            }  

            } catch (e){
               console.log(e)
            }
                
        }
        getAllRoles()
  */
    setRoles(
      ROLES.map(rol => {
        const { name, id: value } = rol;
        return { name, value };
      })
    );
  }, []);
  useEffect(() => {
    if (roles.length === 0) return;
    // #TODO : Test when user endpoint is implemented
    /*  
        try {
            const getUserInfo= async()=>{
            let url=`USER_URL/${userId}`
            const user = await getHttpRequest(URL)
            if (user) {
                const { id, firstName : name , lastName, roleId: role } = user
                setUser({ id, name, lastName, role })
            }

        } catch(e){
            
            console.log(e)
        }

            getUserInfo()
       } */
    const { id, firstName: name, lastName, roleId: role } = USER;
    setUser({ id, name, lastName, role });
  }, [roles]);
  useEffect(() => {
    if (roles.length === 0) return;
    // TODO: Ito check if is an ADMIN.
    //Implement method to get the JWT or ID of user logged
    /* const userLogged= getUserLogged() 
           const checkUserIsAdmin= async ()=>{             
           try{ 
                let url=`USER_URL/${userLogged}`
                const user = await getHttpRequest(URL)
                if (user) {
                     const {  roleId } = user
                     const {name : roleName}=roles.find(role=>{
                     return   role.id===roleId
                 })
                setIsAdmin(roleName==="Admin" ? true:false)
                
             }
            } 
            catch (e){
                console.log(e)
            }
         
             checkUserIsAdmin()
             }  */
    const { roleId } = USER_LOGGED;
    const { name: roleName } = roles.find(role => {
      console.log(role);
      return role.value === roleId;
    });
    setIsAdmin(roleName === 'Admin' ? true : false);
  }, [roles, isAdmin]);
  const handleSubmit = async () => {
    setSucces(false);
    //# Todo  : Test  when  endpoint for update is implemented
    /*    
        try{
            let editUser
            if  (isAdmin) {
                 editUser= {user.name,user.lastName,user.role}
            }
            else{
                editUser={user.name,user.lastName}
            }
            const  result = await patchHttpRequest(USER_URL,editUser)
            setSucces(true)
        }catch(e){
            console.log(e)
        }
         */

    setSucces(true);
  };
  return user ? (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={{
        name: user.name,
        lastName: user.lastName,
        role: user.role,
      }}
    >
      <Form className="container d-flex flex-column">
        <div className="d-flex flex-column spacing">
          <label className="text-left">Name:</label>
          <Field className="form-control" name="name" type="text" />
          <ErrorMessage
            className="alert alert-danger"
            component="label"
            name="name"
          />
        </div>
        <div className="d-flex flex-column spacing">
          <label className="text-left">Last name:</label>
          <Field className="form-control" name="lastName" type="text" />
          <ErrorMessage
            className="alert alert-danger"
            component="label"
            name="lastName"
          />
        </div>
        {isAdmin && (
          <div className="d-flex flex-column spacing">
            <label className="text-left">Role:</label>
            <Field as="select" name="role">
              {roles.map((role, key) => {
                return (
                  <option key={key} value={role.value}>
                    {role.name}
                  </option>
                );
              })}
            </Field>
            <ErrorMessage
              className="alert alert-danger"
              component="label"
              name="role"
            />
          </div>
        )}
        <button className="btn btn-outline-primary" type="submit">
          EDIT
        </button>
        {success && <SucessAlert title="EXITo"></SucessAlert>}
      </Form>
    </Formik>
  ) : (
    <Loader />
  );
}

export default EditUserForm;

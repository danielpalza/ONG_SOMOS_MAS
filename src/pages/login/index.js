import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import FormLogin from '../Forms/FormLogin/FormLogin';
export default function Login() {

  const history = useHistory();
  useEffect(() => {
    if(localStorage.getItem('token')){
      history.push('/');
    }
  }, []);

  return (
    <>
      <FormLogin />
    </>
  );
}

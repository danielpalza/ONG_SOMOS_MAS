import * as Yup from 'yup';
import { postHttpRequest } from '../../../helper/axios';

async function postData(values, setRedirect) {
  //Make axios request to the endpoint of login, if auth is correct, change "redirect" to "/" and make
  // a redirect, on other case, throw a alert message with swal

  let res = await postHttpRequest('/auth/register', values)
    .then(res => {
      localStorage.setItem('user', res.data);
      setRedirect('/');
    })
    .catch(error => {
      return { error: true, message: 'Ocurrio un error durante el registro.' };
    });
  return res;
}

const registerSchema = Yup.object().shape({
  firstName: Yup.string().required('No name was provided'),
  lastName: Yup.string().required('No surname was provided.'),
  email: Yup.string().email('Invalid email').required('No email was provided'),
  password: Yup.string()
    .required('No password was provided.')
    .min(6, 'Password is too short - Minimum 6 characters required'),
});

export { postData, registerSchema };

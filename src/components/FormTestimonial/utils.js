import { postHttpRequest, putHttpRequest } from '../../helper/axios';
import ErrorAlert from '../Alerts/ErrorAlert';
import * as Yup from 'yup';

const FILE_SIZE = 10 * 1024 * 1024;

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const validationSchema = Yup.object().shape({
  nam: Yup.string()
    .max(255, 'Debe tener menos de 255 caracteres.')
    .required('Debe ingresar un nombre.'),
  image: Yup.mixed()
    .required('Se requiere una imagen')
    .test(
      'fileSize',
      'La imagen supera el tamaño maximo de 10 MB.',
      value => value && value.size <= FILE_SIZE
    )
    .test(
      'fileFormat',
      'El formato de la imagen no es compatible, permitidos: JPG, JPEG, PNG',
      value => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  content: Yup.string().required('Debe ingresar un contenido'),
});

//Make a request to update o create a testimonial, if edit is true, or false
//If everything is ok, go to "/", if not, throw a ErrorAlert and enable the submit button
const handleRequest = async ( edit, setMsg, test, setSubmitting, history) => {
  
  if (edit) {
    await putHttpRequest(`/testimonials/${edit.id}`,  {...test, name:test.nam})
      .then(res => {
        if (res.error) {
          setMsg(
            ErrorAlert({
              title: 'Ocurrio un error al actualizar',
              text: res.message,
            })
          );
          setSubmitting(false)
        } else {
          history.push('/');
        }
      })
      .catch(err => err);
  } else {
    await postHttpRequest(`/testimonials/`, {...test, name:test.nam})
      .then(res => {
        if (res.error) {
          setMsg(
            ErrorAlert({
              title: 'Ocurrio un error al actualizar',
              text: res.message,
            })
          );
          setSubmitting(false)
        } else {
          history.push('/');
        }
      })
      .catch(err => err);
  }
};

export {handleRequest, validationSchema};

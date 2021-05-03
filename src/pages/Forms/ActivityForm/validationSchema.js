//  ESTE ARCHIVO FUE BORRADO DE MASTER , LO AGREGO DE NUEVO PARA LA FUNCIONALIDAD DEL COMPONENTE

import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  name: Yup.string().required('No name was provided'),
  content: Yup.string().required('No content was provided'),
});
export default validationSchema;

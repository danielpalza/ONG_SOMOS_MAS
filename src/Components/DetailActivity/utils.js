import { getHttpRequest } from '../../helper/axios';

//Use a id and the helper to make a request to the API
async function requestActivity(id) {
  let indexUrl = 'http://localhost:3000'; //Change later with the real url
  return getHttpRequest(indexUrl + `/actividades/${id}`);
}

export { requestActivity };

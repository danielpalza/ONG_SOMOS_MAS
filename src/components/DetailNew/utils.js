import { getHttpRequest } from '../../helper/axios';

//Use a id and the helper to make a request to the API
async function requestNews(id) {
  let indexUrl = 'http://localhost:3000'; //Change later with the real url
  return getHttpRequest(indexUrl + `/news/${id}`);
}

export { requestNews };

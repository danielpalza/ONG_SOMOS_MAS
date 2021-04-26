import { getHttpRequest } from '../../helper/axios';

//Use a id and the helper to make a request to the API
async function requestActivity(id) {
    let indexUrl = `${process.env.REACT_APP_API_URL}`; //Change later with the real url
    return getHttpRequest(indexUrl + `/actividades/${id}`);
}

export { requestActivity };
import { getHttpRequest } from '../../helper/axios';

//Use a id and the helper to make a request to the API
async function requestNews(id) {
    //Change later with the real url
    return await getHttpRequest(`/news/${id}`);
}

export { requestNews };
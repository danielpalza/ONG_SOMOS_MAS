import axios from 'axios';

export const getHttpRequest = (url, data) => {
    const config = createAxiosConfig(url, data);
    config.method = 'get';
    return axios(config);
};

export const patchHttpRequest = (url, data) => {
    const config = createAxiosConfig(url, data);
    config.method = "patch";
    return axios(config);
}

export const postHttpRequest = (url, data) => {
    const config = createAxiosConfig(url, data);
    config.method = 'post';

    return axios(config);
};

const createAxiosConfig = (url, data) => {
    const jwtToken = localStorage.getItem('token');

    const axiosConfig = {
        url,
    };

    if (data) {
        axiosConfig.data = data;
    }

    if (jwtToken) {
        axiosConfig.headers = { token: jwtToken };
    }

    return axiosConfig;
};
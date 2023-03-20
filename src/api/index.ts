import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://my-json-server.typicode.com/tractian/fake-api',
    headers: { 'X-Custom-Header': 'foobar' }
});


export async function get(url: string) {
    return await axiosApi
        .get(url)
        .then((response) => response.data)
        .catch((response) => response.data)
}

export async function put(url: string, config: object) {
    return await axiosApi
        .put(url, { ...config })
        .then((response) => response.data)
        .catch((response) => response.data)
}
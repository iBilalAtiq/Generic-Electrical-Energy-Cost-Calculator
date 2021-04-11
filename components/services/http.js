import axios from 'axios';

class HttpService {

    constructor() {
        const baseURL = 'https://jsonplaceholder.typicode.com/';
        this.service = axios.create({
            baseURL: baseURL
        });
    }

    get = (url, resolve, reject) => {
        this.service.get(url)
            .then(function (response) {
                resolve(response.data)
            })
            .catch(function (error) {
                reject(error)
            });
    };

    post = async (url, data) => {
        return await this.service.post(url, data);
    }
}

export default new HttpService;
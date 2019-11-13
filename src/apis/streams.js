import axios from 'axios';

export default axios.create({
    baseURL: 'https://streaming-json-server.herokuapp.com'
});
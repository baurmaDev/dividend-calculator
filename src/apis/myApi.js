import axios from 'axios';

export default axios.create({
    baseURL: 'https://mdca-app.herokuapp.com/api'
})
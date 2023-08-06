import axios from 'axios'

// const BaseURL = 'http://127.0.0.1:3001/'
const {hostname, protocol, port} = window.location
const BaseURL = `${protocol}//${hostname}:${port}/`

const API = axios.create({
    baseURL: BaseURL
})

export {API, BaseURL}

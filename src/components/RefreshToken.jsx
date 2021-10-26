import axios from "axios";
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'

const baseURL ='https://dhirajssh.pythonanywhere.com/'

let authToken =localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) :null;

const refresh = axios.create({
    baseURL,
    headers:{Authorization: `Bearer ${authToken.access}`}
})
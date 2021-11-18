import axios from "axios";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";

const baseUrl='http://dhirajssh.pythonanywhere.com/api'

let authToken=localStorage.getItem("authToken")? JSON.parse(localStorage.getItem("authToken"))
: null

const axiosInstance=axios.create({
    baseURL:baseUrl,
    headers:{'Authorization': `Bearer ${authToken?.access}`}
});



axiosInstance.interceptors.request.use(async req =>{
    if(!authToken){
        authToken=localStorage.getItem("authToken")? JSON.parse(localStorage.getItem("authToken"))
        : null;
        req.headers.Authorization=`Bearer ${authToken?.access}`;}

        const user =jwtDecode(authToken?.access)
        const expired=dayjs.unix(user.exp).diff(dayjs()) <1;

        if(!expired) return req

        const response = await axios.post(`${baseUrl}/token/refresh/`, {
            refresh: authToken.refresh
          });

          localStorage.setItem('authTokens', JSON.stringify(response.data))
          req.headers.Authorization = `Bearer ${response.data.access}`
        return req
})
export default axiosInstance;
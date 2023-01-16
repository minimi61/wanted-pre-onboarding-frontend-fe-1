import axios,{AxiosInstance} from "axios";


export const baseURL:string = ' https://pre-onboarding-selection-task.shop/'

export const api:AxiosInstance = axios.create({
  baseURL: baseURL
})

export const token = localStorage.getItem('token')

export const isLogin = () => !!localStorage.getItem('token');


const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  }
});

export default instance;
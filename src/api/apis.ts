import axios from "axios";

type apiType =  {
  baseURL: string
}

export const baseURL = ' https://pre-onboarding-selection-task.shop/'

export const api = axios.create({
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
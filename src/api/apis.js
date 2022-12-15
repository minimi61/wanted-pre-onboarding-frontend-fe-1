import axios from "axios";

export const baseURL = ' https://pre-onboarding-selection-task.shop/'

export const api = axios.create({
  baseURL: baseURL
})

const token = localStorage.getItem('token')

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
    // Content-Type: application/json
  }
});

export default instance;
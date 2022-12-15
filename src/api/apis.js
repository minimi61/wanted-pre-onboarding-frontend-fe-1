import axios from "axios";

const baseURL = ' https://pre-onboarding-selection-task.shop/'

export const api = axios.create({
  baseURL: baseURL
})

const instance = axios.create({
  baseURL,
  headers: {
    // Authorization: Bearer access_token,
    // Content-Type: application/json
  }
});

export default instance;
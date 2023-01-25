import { api } from "./apis";

export const apiLogin = async<T>(email: T, pw: T) => {
  try {
    const res = await api.post(`/auth/signin`, { email: email, password: pw })
    if (res.status >= 200) {
      if (res.data.access_token) {
        localStorage.setItem('token', res.data.access_token)
        window.location.href = '/todo';
      }
    }
  }
  catch (error) {
    console.log(error)
    // if(error)alert('정보를 확인해주세요')
  }
}
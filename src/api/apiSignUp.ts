import { api } from "./apis"

export const apiSignUp = async<T>(email: T, pw: T) => {
  try {
    const res = await api.post(`/auth/signup`, { email: email, password: pw })
    if (res.status >= 200) {
      return res.status
    }
  }
  catch (error) {
    alert('이미 존재하는 아이디입니다')
  }
}
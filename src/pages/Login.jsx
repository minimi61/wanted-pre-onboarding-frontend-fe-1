import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { api,token } from '../api/apis'

const Login = () => {
  const navigate = useNavigate();
  if(token) navigate('/todo')
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  
   //오류메시지 
  const [userEmailError, setUserEmailError] = useState(false);
  const [pwError, setPwError] = useState(false);
  
 //이메일
 const onChangeEmail = (e) => {
  setEmail(e.target.value)
  !email.includes('@') ? setUserEmailError(true) : setUserEmailError(false)
  }
  //비밀번호
  const onChangePw = (e) => {
    setPw(e.target.value)
    e.target.value.length < 8 ? setPwError(true) : setPwError(false)
  }

  const BtnClick = async(e) => {
    e.preventDefault()
    if (email && pw && !userEmailError && !pwError) {
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
  }

  return (
    <LoginContainer>
      <LoginTitle>LOGIN</LoginTitle>
      <LoginContent>
        <LoginBox>
        <IdTitle>EMAIL</IdTitle>
          <IdInput onChange={onChangeEmail} type="text" />
        </LoginBox>
        {userEmailError ? (<ErrorMessage>
            이메일 형식으로 작성해주세요
          </ErrorMessage>) : (null)
          }
      <LoginBox>
        <IdTitle >PW</IdTitle>
        <IdInput   onChange={onChangePw} type="password"/>
        </LoginBox>
        {pwError ? (<ErrorMessage>
            8자 이상 입력해주세요
          </ErrorMessage>) : (null)
          }
      </LoginContent>
      <LoginBtn onClick={BtnClick}>로그인하기</LoginBtn>
      <GotoSignup onClick={()=>{ navigate('/signUp')}}>회원가입하시겠습니까?</GotoSignup>
    </LoginContainer>
  )
}

const LoginContainer = styled.form`
 color: ${(props) => props.theme.color};
`
const LoginTitle = styled.div`
   margin-top: 300px;
   margin-left: 270px;
   color: ${(props) => props.theme.color};
   font-size: 3rem;
`
const LoginContent = styled.div`
  margin-top: 200px;
  margin-left: 270px;

`

const LoginBox = styled.div`
  margin-top: 70px;
  margin-left: -70px;
  display: flex;
  font-size: 1.5rem;
`

const IdTitle = styled.div`
  margin-right: 30px;
  margin-left: -30px;
  width: 80px;
`
const IdInput = styled.input`
  width: 180px;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  border-bottom :  1px solid ${(props) => props.theme.color};
  color:  ${(props) => props.theme.color};
`
const LoginBtn = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 100px;
  margin-left: 230px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  color:  ${(props) => props.theme.BgColor};
`
const GotoSignup = styled.p`
  margin-left: 250px;
  cursor: pointer;
`

const ErrorMessage = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  color:  ${(props) => props.theme.color};
`

export default Login
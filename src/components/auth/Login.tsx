import * as React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { apiLogin } from '../../api/apiLogin';
import { token } from '../../api/apis'

const Login = () => {
  const navigate = useNavigate();
  if (token) navigate('/todo')
  
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  
   //오류메시지 
  const isEmailError = !email.includes('@')
  const isPwError = pw.length<8

 //이메일
 const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
  setEmail(e.target.value)
  }
  //비밀번호
  const onChangePw = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value)
  }

  const BtnClick = async(e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (email && pw && !isEmailError && !isPwError) {
      apiLogin(email,pw)
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
        {isEmailError ? (<ErrorMessage>
            이메일 형식으로 작성해주세요
          </ErrorMessage>) : (null)
          }
      <LoginBox>
        <IdTitle >PW</IdTitle>
        <IdInput   onChange={onChangePw} type="password"/>
        </LoginBox>
        {isPwError ? (<ErrorMessage>
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
   margin-top: 200px;
   margin-left: 35%;
   color: ${(props) => props.theme.color};
   font-size: 3rem;
`
const LoginContent = styled.div`
  margin-top: 100px;
  margin-left: 40%;

`

const LoginBox = styled.div`
  margin-top: 30px;
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
  margin-top: 60px;
  margin-left: 30%;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  color:  ${(props) => props.theme.BgColor};
`
const GotoSignup = styled.p`
  margin-left: 35%;
  margin-bottom: 100px;
  cursor: pointer;
`

const ErrorMessage = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  color:  ${(props) => props.theme.color};
`

export default Login
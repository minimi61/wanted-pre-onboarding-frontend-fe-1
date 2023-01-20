import * as React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { api } from '../api/apis'

const SingUp = () => {
  const navigate = useNavigate();
  
  //이메일,비밀번호확인
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [pwCheck, setPwCheck] = useState('')

  //오류메시지 
  const isEmailError = !email.includes('@')
  const isPwError = pw.length<8
  const pwCheckError = pw !== pwCheck

  //이메일
  const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  //비밀번호
  const onChangePw = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value)
  }

  const onChangePwCheck = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPwCheck(e.target.value)
  }
  const BtnClick = async(e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (email && pw && pwCheck && !isEmailError && !isPwError && !pwCheckError) {
      try {
        const res = await api.post(`/auth/signup`, { email: email, password: pw })
        if (res.status >= 200) {
          navigate('/')
        }
      }
      catch (error) {
        alert('이미 존재하는 아이디입니다')
      }
    }
  }
  return (
    <SignUpContainer >
      <PrevBtn onClick={()=>{navigate('/')}}/>
    <SignUpTitle>SignUp</SignUpTitle>
    <SignUpContent>
      <SignUpBox>
        <IdTitle>EMAIL</IdTitle>
          <IdInput onChange={onChangeEmail} type="text" />
        </SignUpBox>
        {isEmailError ? (<ErrorMessage>
            이메일 형식으로 작성해주세요
          </ErrorMessage>) : (null)
          }
      <SignUpBox>
        <IdTitle >PW</IdTitle>
        <IdInput   onChange={onChangePw} type="password"/>
        </SignUpBox>
        {isPwError ? (<ErrorMessage>
            8자 이상 입력해주세요
          </ErrorMessage>) : (null)
          }
      <SignUpBox>
        <IdTitle>PW Check</IdTitle>
        <IdInput  onChange={onChangePwCheck} type="password"/>
        </SignUpBox>
        {pwCheckError ? (<ErrorMessage>
            비밀번호가 같지 않습니다
          </ErrorMessage>) : (null)
          }
    </SignUpContent>
      {Boolean(email) && Boolean(pw) && Boolean(pwCheck) &&  !isEmailError && !isPwError && !pwCheckError?
        <SignUpBtn onClick={BtnClick} disabled={false}>가입하기</SignUpBtn>
        :
        <NoSignUpBtn onClick={BtnClick} disabled={true}>가입하기</NoSignUpBtn>
    }
      
        
  </SignUpContainer>
  )
}
const SignUpContainer = styled.form`
 color: ${(props) => props.theme.color};
`

const PrevBtn = styled.button`
  width: 50px;
  height: 50px;
  margin-top: 100px;
  margin-left: 10px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  background-color: ${(props) => props.theme.color};
  :after{
    content: '';
    display:inline-block;
    width: 0.8rem;
    height: 0.8rem;
    margin-left: 0.5rem;
    border-top: 0.1rem solid ${(props) => props.theme.bgColor};
    border-right: 0.1rem solid ${(props) => props.theme.bgColor};
    transform: rotate(225deg );
  }
  :hover{
    background-color:  ${(props) => props.theme.BgColor};
    /* background-color: #202020; */
  }
`


const SignUpTitle = styled.div`
   margin-top: 80px;
   margin-left: 35%;
   color: ${(props) => props.theme.color};
   font-size: 3rem;
`
const SignUpContent = styled.div`
  margin-top: 100px;
  margin-left: 40%;
`

const SignUpBox = styled.div`
  margin-top: 30px;
  margin-left: -70px;
  display: flex;
  font-size: 1.5rem;
`

const IdTitle = styled.div`
  margin-right: 30px;
  margin-left: -30px;
  width: 130px;
`
const IdInput = styled.input`
  width: 180px;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  border-bottom :  1px solid ${(props) => props.theme.color};
  color:  ${(props) => props.theme.color};
`
const ErrorMessage = styled.div`
  margin-top: 10px;
  margin-left: 60px;
  color:  ${(props) => props.theme.color};
`

const SignUpBtn = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 30px;
  margin-left: 28%;
  margin-bottom: 10px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  background-color: ${(props)=>props.theme.color};
  color:  ${(props) => props.theme.bgColor};
`
const NoSignUpBtn = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 30px;
  margin-left: 28%;
  margin-bottom: 10px;
  border-radius: 50px;
  font-weight: 600;
  color:  ${(props) => props.theme.BgColor};
  background-color : #3e3b3b;
`


export default SingUp
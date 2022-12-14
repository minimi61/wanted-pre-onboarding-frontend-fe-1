import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Login = () => {
  const navigate = useNavigate();

  const BtnClick = () => {
    alert('클릭했다')
  }

  return (
    <LoginContainer>
      <LoginTitle>LOGIN</LoginTitle>
      <LoginContent>
        <LoginBox>
          <IdTitle>ID</IdTitle>
          <IdInput type="text"/>
        </LoginBox>
        <LoginBox>
          <IdTitle>PW</IdTitle>
          <IdInput type="password"/>
        </LoginBox>
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
  width: 30px;
`
const IdInput = styled.input`
  width: 180px;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  border-bottom : white 1px solid;
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

export default Login
import React from 'react'
import styled from 'styled-components'

const Login = () => {
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
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
 color: ${(props) => props.theme.color};
`
const LoginTitle = styled.div`
   color: ${(props) => props.theme.color};
   font-size: 3rem;
`
const LoginContent = styled.div`
  margin-top: 100px;
`

const LoginBox = styled.div`
  margin-top: 50px;
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

export default Login
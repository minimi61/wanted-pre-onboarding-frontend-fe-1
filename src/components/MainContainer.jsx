import React from 'react'
import styled from 'styled-components'
import Login from '../pages/Login'

const MainContainer = () => {
  return (
    <BgContainer>
      <BgBox>
        <Login/>
      </BgBox>
    </BgContainer>
  )
}

const BgContainer = styled.div`
    display: flex;
    justify-content: center;
    
` 

const BgBox = styled.div`
    width: 700px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: thick double #fff;
    background-color: ${(props) => props.theme.bgColor};
   
`
export default MainContainer
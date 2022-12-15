import React from 'react'
import styled from 'styled-components'

const TodoMain = () => {
  return (
    <TodoContainer>
      <TodoTitle>TODO</TodoTitle>
      <TodoInput />
      <AddBtn>+</AddBtn>
    </TodoContainer>
  )
}

const TodoContainer = styled.div`
  color: ${(props) => props.theme.color};
`

const TodoTitle = styled.div`
   margin-top: 200px;
   margin-left: 270px;
   color: ${(props) => props.theme.color};
   font-size: 3rem;
`
const TodoInput = styled.input`
  width: 300px;
  margin-top: 100px;
  margin-left: 150px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.color};
`

const AddBtn = styled.button`
   width: 30px;
   height: 30px;
   border-radius: 30px;
   margin-left: 30px;
   background-color:${(props) => props.theme.color}; ;
   color: ${(props) => props.theme.bgColor};
`

export default TodoMain
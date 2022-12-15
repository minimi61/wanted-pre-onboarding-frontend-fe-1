import React from 'react';
import MainContainer from './components/MainContainer';
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Global from './styles/Global';
import SingUp from './pages/SingUp';
import Login from './pages/Login';
import TodoMain from './pages/TodoMain';

const App = () => {
  return (
  <>
    <Global/>
    <ThemeProvider theme={{ color: '#ffffff', bgColor: '#202020' }}>
    {/* <ThemeProvider theme={{ color: '#202020', bgColor: '#fff' }}> */}
      <BgContainer>
        <BgBox>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signUp' element={<SingUp />} />
          <Route path='/todo' element={<TodoMain />} />
        </Routes>
        </BgBox>
      </BgContainer>
   </ThemeProvider>
 </>
    );
}
const BgContainer = styled.div`
    display: flex;
    justify-content: center;
    
` 

const BgBox = styled.div`
    width: 700px;
    height: 100vh;
    display: flex;
    border-radius: 50px;
    border: thick double #fff;
    background-color: ${(props) => props.theme.bgColor};
   
`
export default App;

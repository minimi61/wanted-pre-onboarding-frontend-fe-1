import React,{useState} from 'react';
import { Route, Routes, Navigate  } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Global from './styles/Global';
import SingUp from './pages/SingUp';
import Login from './pages/Login';
import TodoMain from './pages/TodoMain';
import { TodoProvider } from './hooks/TodoContext';
import PrivateRoute from './Routes/PrivateRoute';
import Header from './components/Header';
import { isLogin } from './api/apis';

const App = () => {
  const [toggleBtn, setToggleBtn] = useState(false)
  return (
  <TodoProvider>
      <Global />
    <ThemeProvider theme={toggleBtn ? { color: '#202020', bgColor: '#ffff' }:{ color: '#ffffff', bgColor: '#202020' }}>
    {/* <ThemeProvider theme={{ color: '#202020', bgColor: '#fff' }}> */}
        <BgContainer>
        <Header toggleBtn={toggleBtn} setToggleBtn={setToggleBtn}/>

        <BgBox>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signUp' element={<SingUp />} />
          {/* 리다이렉트 방법1 - elment내 조건 */}
          <Route path='/todo' element={isLogin() ? <TodoMain /> : <Navigate to='/' />} />
         {/* 리다이렉트 방법2 - PrivateRoute 사용*/}
          {/* <Route path='/todo' element={<PrivateRoute />}>
            <Route path="/todo" element={<TodoMain />} />
          </Route> */}
        </Routes>
        </BgBox>
      </BgContainer>
   </ThemeProvider>
 </TodoProvider>
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
    border: thick double #5c5a5a;
    background-color: ${(props) => props.theme.bgColor};
   
`
export default App;

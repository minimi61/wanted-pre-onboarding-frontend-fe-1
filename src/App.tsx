import * as React from 'react';
import { useState } from 'react';
import { Route, Routes, Navigate  } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Global from './styles/Global';
import SingUp from './components/auth/SingUp';
import Login from './components/auth/Login';
import TodoMain from './components/main/TodoMain';
// import { TodoProvider } from './hooks/TodoContext';
import Header from './components/common/Header';
import { isLogin } from './api/apis';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const App = () => {
  const queryClient = new QueryClient()
  const [toggleBtn, setToggleBtn] = useState(false)
  return (
  // <TodoProvider>
    <QueryClientProvider client={queryClient}>
      <Global />
    <ThemeProvider theme={toggleBtn ? { color: '#202020', bgColor: '#ffff' }:{ color: '#ffffff', bgColor: '#202020' }}>
        <BgContainer>
        <Header toggleBtn={toggleBtn} setToggleBtn={setToggleBtn}/>

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
      </BgContainer>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
//  </TodoProvider>
    );
}
const BgContainer = styled.div`
  /* position: relative; */
  max-width: 480px;
  min-width: 320px;
  height: 100vh;
  /* overflow-y: scroll; */
  margin: 0 auto;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 50px;
  border: thick double #5c5a5a;

` 


export default App;

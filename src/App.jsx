import React,{useState} from 'react';
import { Route, Routes  } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Global from './styles/Global';
import SingUp from './pages/SingUp';
import Login from './pages/Login';
import TodoMain from './pages/TodoMain';
import { TodoProvider } from './hooks/TodoContext';
import PrivateRoute from './Routes/PrivateRoute';

const App = () => {
  const [toggleBtn, setToggleBtn] = useState(false)
  return (
  <TodoProvider>
    <Global/>
    <ThemeProvider theme={{ color: '#ffffff', bgColor: '#202020' }}>
    {/* <ThemeProvider theme={{ color: '#202020', bgColor: '#fff' }}> */}
      <BgContainer>
        <BgBox>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signUp' element={<SingUp />} />
          <Route path='/todo' element={<TodoMain />} />

          <Route path='/todo' element={<PrivateRoute />}>
            <Route path="/todo" element={<TodoMain />} />
          </Route>
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
    border: thick double #fff;
    background-color: ${(props) => props.theme.bgColor};
   
`
export default App;

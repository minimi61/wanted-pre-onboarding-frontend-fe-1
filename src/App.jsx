import React from 'react';
import MainContainer from './components/MainContainer';
import { ThemeProvider } from 'styled-components';
import Global from './styles/Global';

const App = () => {
  return (
    < >
      <Global/>
      <ThemeProvider theme={{ color: '#ffffff', bgColor: '#202020' }}>
      {/* <ThemeProvider theme={{ color: '#202020', bgColor: '#fff' }}> */}
        <MainContainer/>
      </ThemeProvider>
    
    </>
  );
}

export default App;

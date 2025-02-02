import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reset from 'styled-reset';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Introduction from './pages/Introduction';
function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:currentIndex" element={<Detail />} />
        <Route path="/likelion" element={<Introduction />} />
      </Routes>
    </BrowserRouter>
  );
};

const GlobalStyle = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    
  }
  body{
    max-width: 425px;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    font-family: 'Noto Sans KR', sans-serif;
    background:#000000;
  }
  @keyframes rotate_image{
	100% {
    	transform: rotate(360deg);
    }
}

  
`;

export default App;

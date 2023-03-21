import logo from './logo.svg';
import './App.css';
import GlobalStyle from './GlobalStyles';
import PracticeLayout1 from './layout/practic1'
import EasyLogin from './firebase/loginPage';

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <EasyLogin></EasyLogin>
    </>
  );
}

export default App;

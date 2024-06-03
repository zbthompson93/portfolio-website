import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import HeaderImage from './HeaderImage/HeaderImage';
import Summary from './Summary/Summary';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <HeaderImage />
      <Summary />
      <Skills />
    </div>
  );
}

export default App;
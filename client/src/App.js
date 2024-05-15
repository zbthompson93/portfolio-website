import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import HeaderImage from './HeaderImage/HeaderImage';
import Summary from './Summary/Summary';

function App() {
  return (
    <div>
      <NavBar name={"ZT"} />
      <HeaderImage />
      <Summary />
    </div>
  );
}

export default App;

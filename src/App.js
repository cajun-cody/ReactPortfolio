import logo from './logo.svg';
import './App.css';
import MyHeader from './Components/NavBar/my_header';
import Home from './Components/Home/home';
import NavLinks from './Components/NavLinks/navlinks';

function App() {
  return (
    <div className="App">
      <MyHeader/>
      <NavLinks/>
      <Home/>
    </div>
  );
}

export default App;

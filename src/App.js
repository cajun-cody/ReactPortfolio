
import './App.css';
import MyHeader from './Components/NavBar/my_header';
import Home from './Components/Home/home';
import NavLinks from './Components/NavLinks/navlinks';
import About from './Components/About/about';
import Portfolio from './Components/Projects/portfolio';
import SkillsAndTechnologies from './Components/SkillsAndTechnologies/SkillsAndTechnologies';
import ContactForm from './Components/Contact/contact';


function App() {


  return (
    <div className="App">
      <MyHeader/>
      <NavLinks/>
      <Home/>
      <About/>
      <SkillsAndTechnologies/>
      <Portfolio/>
      <ContactForm/>
    </div>
  );
}

export default App;

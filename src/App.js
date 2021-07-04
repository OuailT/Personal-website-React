import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import { BrowserRouter as Router } from 'react-router-dom';
import About from "./Components/About/About";


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <HeroSection/>
    <About/>
    </Router>
    </>
  );
}

export default App;

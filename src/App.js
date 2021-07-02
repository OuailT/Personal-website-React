import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <HeroSection/>
    </Router>
    </>
  );
}

export default App;

import './index.css';
// import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Doctors from './components/Doctors';
import Features from './components/Features';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <Services />
      <AboutUs />
      <Doctors />
      <Features />
    </div>
  );
}

export default App;

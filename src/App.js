import './index.css';
// import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Doctors from './components/Doctors';
import Features from './components/Features';
import Testmonials from './components/Testmonials';
import Emergency from './components/Emergency';
import Footer from './components/Footer';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <Services />
      <AboutUs />
      <Doctors />
      <Features />
      {/* <Testmonials /> */}
      <Emergency />
      <Footer />
    </div>
  );
}

export default App;

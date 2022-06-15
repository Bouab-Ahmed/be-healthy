import './index.css';
// import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Services from './components/Services';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <Services />
    </div>
  );
}

export default App;

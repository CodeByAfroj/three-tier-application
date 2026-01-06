import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

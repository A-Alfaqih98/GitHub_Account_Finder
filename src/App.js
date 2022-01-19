import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Users from './components/Users';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';

function App() {
  const [forminput, setforminput] = useState('');
  const handleinput = (e) => {
    e.preventDefault();
    setforminput(e.target.value);
  };
  return (
    <Router>
      <div className="bg-dark" style={{ height: '100vh', overflow: 'auto' }}>
        <Navbar />
        <Form handleinput={handleinput} />
        <Users forminput={forminput.length > 0 ? forminput : ''} />
        <Routes>
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

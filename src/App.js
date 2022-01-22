import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Users from './components/Users';
import FetchAlert from './components/FetchAlert';
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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <FetchAlert />
                <Form handleinput={handleinput} />
                <Users forminput={forminput.length > 0 ? forminput : ''} />
              </>
            }
          />

          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

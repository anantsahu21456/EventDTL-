import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TermANDcondition from './components/TermANDcondition';
import ForgotPassword from './components/ForgotPassword';
import Verifycode from './components/Verifycode';
import SetPassword from './components/SetPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms" element={<TermANDcondition />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<Verifycode />} />  {/* Corrected this line */}
        <Route path="/SetPassword" element={<SetPassword/>} />  {/* Corrected this line */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

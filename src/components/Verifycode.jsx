import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import '../css/Verifycode.css';

const Verifycode = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {}; // Destructure email from state
  const [resendMessage, setResendMessage] = useState('');

  const handleBackToLogin = () => {
    navigate('/login'); // Redirect to the login page
  };

  const handleVerify = () => {
    // Handle the verification logic here
    console.log('Verification logic here for email:', email);

    // If the verification is successful, navigate to the SetPassword page
    navigate('/SetPassword', { state: { email: email } });
  };

  const handleResendCode = () => {
    // Logic to resend the OTP
    // This could be an API call to your backend to trigger sending the OTP to the user's email
    console.log('Resending OTP to:', email);

    // Simulate sending OTP (you can replace this with an actual API call)
    setTimeout(() => {
      setResendMessage('A new OTP has been sent to your email.');
    }, 1000);
  };

  return (
    <div className="verify-container">
      <div className="verify-box">
        <button className="back-button" onClick={handleBackToLogin}>
          <span>&larr;</span> Back to login
        </button>
        <h2>Verify code</h2>
        <p>An authentication code has been sent to {email}.</p>
        <div className="input-container">
          <input type="text" placeholder="Enter Code" />
          <button className="eye-button">&#128065;</button> {/* Eye icon */}
        </div>
        <div className="resend">
          <span>Didn't receive a code?</span>
          <Link to="#" onClick={handleResendCode}>Resend</Link> {/* Replacing anchor with Link */}
        </div>
        {resendMessage && <p className="resend-message">{resendMessage}</p>} {/* Display resend message */}
        <button className="verify-button" onClick={handleVerify}>Verify</button>
      </div>
    </div>
  );
};

export default Verifycode;

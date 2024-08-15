import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Use navigate for redirection
import '../css/ForgotPassword.css';  // This will contain our CSS

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle forgot password logic here (e.g., send email with verification code)
        console.log('Email submitted:', email);

        // After handling the email submission, navigate to the Verify Code page
        navigate('/verify-code', { state: { email: email } });
    };

    return (
        <div className="forgot-password-container">
            <Link to="/login" className="back-to-login">← Back to login</Link>
            <div className="forgot-password-card">
                <h2>Forgot your password?</h2>
                <p>Don’t worry, happens to all of us. Enter your email below to recover your password</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="john.doe@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                <div className="social-login">
                    <p>Or Sign up with</p>
                    <div className="social-icons">
                        <Link to="#" className="social-icon"><img src="/path/to/facebook-icon.png" alt="Facebook" /></Link>
                        <Link to="#" className="social-icon"><img src="/path/to/apple-icon.png" alt="Apple" /></Link>
                        <Link to="#" className="social-icon"><img src="/path/to/google-icon.png" alt="Google" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;

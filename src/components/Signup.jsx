import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Signup.css';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="signup-container">
            <div className="toggle-buttons">
                <Link to="/login" className="login-btn">Login</Link>
                <button className="signup-btn active">Register</button>
            </div>
            <h2>Welcome to EventDTL</h2>
            <p>Let's get you all set up so you can access your personal account.</p>
            <div className="form-container">
                <div className="input-row">
                    <div className="input-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" placeholder="First Name" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" placeholder="Last Name" />
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" placeholder="Phone Number" />
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-group password-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Password"
                        />
                        <span
                            className={`password-toggle ${showPassword ? 'visible' : ''}`}
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </span>
                    </div>
                    <div className="input-group password-container">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            placeholder="Confirm Password"
                        />
                        <span
                            className={`password-toggle ${showConfirmPassword ? 'visible' : ''}`}
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            {showConfirmPassword ? '🙈' : '👁️'}
                        </span>
                    </div>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" /> I agree to all the <Link to="/terms">Terms</Link> and <Link to="/terms">Privacy Policies</Link>
                    </label>
                </div>
                <button className="login-submit">Register</button>
                <div className="signup-redirect">
                    Already have an account? <Link to="/login" className="signup-link">Login</Link>
                </div>
                <div className="social-login">
                    <p>Or sign up with</p>
                    <div className="social-icons">
                        <Link to="#" className="social-icon"><img src="facebook-icon.png" alt="Facebook" /></Link>
                        <Link to="#" className="social-icon"><img src="google-icon.png" alt="Google" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;

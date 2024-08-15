import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password });
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="toggle-buttons">
          <button className="login-btn active">Login</button>
          <button className="signup-btn">
            <Link to="/signup">Register</Link>
          </button>
        </div>
        <h2>Welcome Back to EventDTL</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className={`password-toggle ${passwordVisible ? "visible" : ""}`}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
          </div>
          <button type="submit" className="login-submit">Login</button>
        </form>
        <div className="signup-redirect">
          <span>Don't have an account?</span> <Link to="/signup" className="signup-link">Sign up</Link>
        </div>
        <div className="social-login">
          <p>Or login with</p>
          <div className="social-icons">
            <Link to="#" className="social-icon"><img src="/path/to/facebook-icon.png" alt="Facebook" /></Link>
            <Link to="#" className="social-icon"><img src="/path/to/google-icon.png" alt="Google" /></Link>
            <Link to="#" className="social-icon"><img src="/path/to/apple-icon.png" alt="Apple" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

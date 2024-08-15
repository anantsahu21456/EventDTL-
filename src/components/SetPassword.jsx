import React, { useState } from 'react';
import '../css/SetPassword.css';

const SetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSetPassword = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            // Handle the password reset logic here (e.g., API call)
            console.log('Password set successfully');

            // Show success popup
            setShowPopup(true);

            // Hide popup after 3 seconds
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
        } else {
            // Handle password mismatch case
            console.error('Passwords do not match');
        }
    };

    return (
        <div className="set-password-container">
            <div className="set-password-box">
                <h2>Set a password</h2>
                <p>Your previous password has been reset. Please set a new password for your account.</p>
                <form onSubmit={handleSetPassword}>
                    <div className="input-container">
                        <input
                            type="password"
                            placeholder="Create Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="button" className="eye-button">&#128065;</button> {/* Eye icon */}
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            placeholder="Re-enter Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button type="button" className="eye-button">&#128065;</button> {/* Eye icon */}
                    </div>
                    <button type="submit" className="set-password-button">Set Password</button>
                </form>
            </div>
            {showPopup && <div className="popup-message">Password created successfully!</div>}
        </div>
    );
};

export default SetPassword;

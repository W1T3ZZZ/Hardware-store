import React, { useState } from "react";
import "./Login.css";

const Login = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="modal-content">
          {isLogin ? (
            <div className="form-container">
              <h2>Login</h2>
              <form>
                <label>Email</label>
                <input type="email" required />
                <label>Password</label>
                <input type="password" required />
                <button type="submit">Login</button>
              </form>
              <p>
                Don't have an account?{" "}
                <span onClick={() => setIsLogin(false)}>Register</span>
              </p>
            </div>
          ) : (
            <div className="form-container">
              <h2>Register</h2>
              <form>
                <label>Name</label>
                <input type="text" required />
                <label>Email</label>
                <input type="email" required />
                <label>Password</label>
                <input type="password" required />
                <button type="submit">Register</button>
              </form>
              <p>
                Already have an account?{" "}
                <span onClick={() => setIsLogin(true)}>Login</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

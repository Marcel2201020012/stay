import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css'; 
import google from '../images/google.png'; 
import apple  from '../images/apple.png'; 

const Login = () => {
  return (
    <div className="Login-page-container">

      <div className="Login-main-content">
        <div className="Login-left-panel">
          <div className="Login-left-content">
          <p>Bingung Nginap</p>
          <p>Dimana?</p>
          <h1> Stay With Us Aja!</h1>
          </div>
        </div>

        {/* Right Panel - Registration Form */}
        <div className="Login-right-panel">
          <div className="Login-form-card">
            <h2>Selamat datang di Stay</h2>
            <br></br>
            <form className="Login-form">
              <div className="form-group">
                <label htmlFor="email">E-mail atau nomor telepon</label>
                <input 
                  type="Email" 
                  id="email" 
                  placeholder="Masukkan e-mail atau nomor telepon" 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Kata sandi</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="Masukkan kata sandir" 
                  className="form-input"
                />
              </div>
               <br></br>
              <br></br>
              <Link to="/home">
              <button type="submit" className="btn-Login">Login</button>
              </Link>
              
            </form>

            <div className="or-separator">
              <span>or</span>
            </div>

            <div className="social-buttons">
              <button className="btn-social google">
                <img src= {google} alt="Google" className="social-icon" />
                Sign in with Google
              </button>
              <button className="btn-social apple">
                <img src={apple} alt="Apple" className="social-icon" />
                Sign in with Apple
              </button>
            </div>
            <div className="login-link">
              Belum punya akun? <Link to="/Register">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
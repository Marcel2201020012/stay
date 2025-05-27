import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css'; // Pastikan path ini benar
import google from '../images/google.png'; // Impor gambar
import apple  from '../images/apple.png'; 

const Register = () => {
  return (
    <div className="register-page-container">
      {/* Top Bar for "Daftar" title (as seen in the design's top-left) */}

      <div className="register-main-content">
        {/* Left Panel - Image and Slogan */}
        <div className="register-left-panel">
          <div className="register-left-content">
          <p>Bingung Nginap</p>
          <p>Dimana?</p>
          <h1> Stay With Us Aja!</h1>
          </div>
        </div>

        {/* Right Panel - Registration Form */}
        <div className="register-right-panel">
          <div className="register-form-card">
            <h2>Buat akun Anda</h2>
            <br></br>
            <form className="register-form">
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Masukkan email Anda" 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Nama Pengguna</label>
                <input 
                  type="text" 
                  id="username" 
                  placeholder="Masukkan nama pengguna" 
                  className="form-input"
                />
              </div>

               <div className="checkbox">
              <input
              type="checkbox"
                className="mr-2 h-3 w-3"
              />
              <label className="text-sm">
                Saya menyetujui syarat & ketentuan Stay
              </label>
              </div>
               <br></br>
              <br></br>
              <button type="submit" className="btn-register">Sign In</button> {/* Mengubah teks tombol */}
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
              Sudah punya akun? <Link to="/login">Log in</Link> {/* Tautan ke halaman login */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
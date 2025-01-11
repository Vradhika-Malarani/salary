import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import loginImage from '../Images/istockphoto-1389255223-612x612.jpg';

const LoginValidation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.error('Please fill out all fields!');
    } else if (!validateEmail(email)) {
      toast.error('Invalid email format!');
    } else if (!validatePassword(password)) {
      toast.error('Password must be at least 8 characters long and include both letters and numbers!');
    } else {
      toast.success('Login successful!');
      navigate('./home');
    }
  };

  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="row w-100" style={{maxWidth: '900px',boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',}}>
          <div className="col-md-6 p-4">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn bg-black text-white w-100">
                  Login
                </button>
              </form>
              <div className="mt-3 text-center">
                <a href="#" className="text-decoration-none text-primary">
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block p-0 ">
            <img
              src={loginImage}
              alt="Login Illustration"
              className="img-fluid h-100 w-100"
              style={{ objectFit: 'cover'}}
            />
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default LoginValidation;

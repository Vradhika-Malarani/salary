import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';
const Login = () => {
 
  const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      toast.error("Please fill out all fields!");
    } else {
      toast.success("Login successful!");
      navigate('./home')
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div className="card shadow-lg" style={{ width: '24rem' }}>
          <div className="card-body">
            <h1 className="card-title text-center  mb-4">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email / User Name:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email or username"
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
                />
              </div>
              <button
                type="submit"
                className="btn bg-black text-white w-100"

              >
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
      </div>
    <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
    </>
  );
};

export default Login;

import { useState } from 'react';
import './signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Add confirm password
  const [role, setRole] = useState('Worker'); // Default to Worker
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // <img src="https://img.freepik.com/premium-vector/programmer-engineering-coding-programmer-working-code-web-app-development-computer_999327-92306.jpg" alt="" />

    // Post form data to backend API
    axios.post('http://localhost:3001/api/auth/register', { firstname, lastname, email, password, role })
      .then(result => {
        console.log(result);
        // Navigate to login after successful registration
        navigate('/login');
      })
      .catch(err => {
        console.error(err);
        alert("Error registering user");
      });
  };

  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="my-5 display-5 fw-bold ls-tight">
              Sign up <br />
            </h1>
            <p className="mb-4 opacity-70">
              Join us today and start exploring amazing features and benefits. Create your account and enjoy the best we have to offer.
            </p>
            <img
              src="https://img.freepik.com/premium-vector/programmer-engineering-coding-programmer-working-code-web-app-development-computer_999327-92306.jpg"
              alt="Signup Illustration"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <form onSubmit={handleSubmit}>
              {/* Firstname */}
              <div className="form-outline mb-4" style={{boxShadow:"2px 2px 5px 2px rgba(0, 0, 0, 0.3)",borderRadius:"5px",padding:"5px"}}>
                <input
                  type="text"
                  id="firstname"
                  className="form-control"
                  required
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <label className="form-label" htmlFor="firstname">First Name</label>
              </div>

              {/* Lastname */}
              <div className="form-outline mb-4" style={{boxShadow:"2px 2px 5px 2px rgba(0, 0, 0, 0.3)",borderRadius:"5px",padding:"5px"}}>
                <input
                  type="text"
                  id="lastname"
                  className="form-control"
                  required
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <label className="form-label" htmlFor="lastname">Last Name</label>
              </div>

              {/* Email */}
              <div className="form-outline mb-4" style={{boxShadow:"2px 2px 5px 2px rgba(0, 0, 0, 0.3)",borderRadius:"5px",padding:"5px"}}>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="email">Email Address</label>
              </div>

              {/* Password */}
              <div className="form-outline mb-4" style={{boxShadow:"2px 2px 5px 2px rgba(0, 0, 0, 0.3)",borderRadius:"5px",padding:"5px"}}>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="password">Password</label>
              </div>

              {/* Confirm Password */}
              <div className="form-outline mb-4" style={{boxShadow:"2px 2px 5px 2px rgba(0, 0, 0, 0.3)",borderRadius:"5px",padding:"5px"}}>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
              </div>

              {/* Role */}
              <div className="mb-4" style={{boxShadow:"2px 2px 5px 2px rgba(0, 0, 0, 0.3)",borderRadius:"5px",padding:"5px"}}>
                <select
                  className="form-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="Worker">Worker</option>
                  <option value="Hire">Hire</option>
                </select>
              </div>
              <br />
              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary btn-block mb-4"
                style={{
                  position:"initial",
                  width: '20%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Sign up
              </button>

              {/* Login Redirect */}
              <div className="log text-center">
                Already registered? <a href="/login" style={{ color: 'blue' }}>Login</a>
               
              </div>
           
            </form>

            <div className="text-center">
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

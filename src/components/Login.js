import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, setCredentials] = useState([
    { email: "k@k", password: "123" },
  ]);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the provided email and password are in the credentials list
    const existingUser = credentials.find(
      (user) => user.email === email && user.password === password
    );

    if (existingUser) {
      navigate("/home/company-profile");
    } else {
      // Add the new user to the credentials list
      const newUser = { email, password };
      setCredentials([...credentials, newUser]);
      window.alert("These credentials do not exist in the system. You have been signed up!");
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h1 className="sign-up-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

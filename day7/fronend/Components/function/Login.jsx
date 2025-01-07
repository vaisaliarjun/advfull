import React, { useState } from "react";

const Login = ({ onLogin, onSwitchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div style={{ margin: "50px auto", width: "300px", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px", marginTop: "10px" }}>
          Login
        </button>
      </form>
      <p style={{ marginTop: "20px" }}>
        Don't have an account?{" "}
        <button
          onClick={onSwitchToSignup}
          style={{
            background: "none",
            border: "none",
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Signup
        </button>
      </p>
    </div>
  );
};

export default Login;

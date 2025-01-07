import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    var req=axios.post('http://localhost:3001/signup',{
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password
    })
    console.log(req.body);
    navigate('/login');

  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>firstName: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
        <label>lastName: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

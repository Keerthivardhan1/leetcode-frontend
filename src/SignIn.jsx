import { useState } from "react";
import {  useNavigate } from "react-router-dom";

function SignIn() {
  const naviaget = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(credentials.email == "test@gmail.com" && credentials.password == "1234"){
        naviaget('/Home')
        return;
    }
    else{
        alert("Invalid Credentials");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="signinform">
      <div>
        <h1>Sign In</h1>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
}


export default SignIn
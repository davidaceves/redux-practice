import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions/actions";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    this.props
      .login(username, password)
      .then(() => this.props.history.push("/protected"));
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button></button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggingIn: state.loggingIn,
    error: state.error,
  };
};

export default connect(mapStateToProps, { login })(Login);

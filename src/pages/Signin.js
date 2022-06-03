import React from "react";
import "../styles/Signin.css";

const Signin = () => {
  return (
    <div className="signin">
      <div className="formContainer">
        <h2 className="title">Login to page</h2>
        <form className="form">
          <input
            name="username"
            // value={username}
            type={"text"}
            placeholder="Email or Username"
            // onChange={onChangeUserName}
          />
          <input
            name="password"
            // value={password}
            type={"password"}
            placeholder="Password"
            // onChange={onChangePassword}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;

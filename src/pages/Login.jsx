import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <>
    <div className="modal-overlay">
      <form className="form__container">
        <h2 className="title__form">Login Now</h2>
        <input
          id="email"
          className="input__email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <input
          id="password"
          className="input__password"
          type="password"
          placeholder="Enter your password"
          required
        />
        <div className="password__wrap">
          <a className="password__tag" href="#">
            Forgot Password
          </a>
        </div>
        <button type="submit" className="submit__btn">
          Log in
        </button>
        <p className="paragraph">
          Don't have an account?{" "}
          <a href="#" className="tag">
            Signup Now
          </a>
        </p>
      </form>
      </div>
    </>
  );
};

export default Login;

import React from 'react'

const SignUp = () => {
  return (
    <>
      <form className="form__container">
        <h2 className="title__form">Sign Up Now</h2>
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
       
        <button type="submit" className="submit__btn">
          Sign up
        </button>
        <p className="paragraph">
          Already have an account?{" "}
          <a href="#" className="tag">
            Log in
          </a>
        </p>
      </form>
    </>
  )
}

export default SignUp

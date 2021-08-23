const SignIn = () => (
  <div className="singleOuter">
    <div className="backgroundImage" />
    <div className="singleInner">
      <h1 className="lightTextWeight">Sign In</h1>
      <div id="SignInForm">
        <form>
          <input
            type="text"
            id="Email"
            name="email"
            className="SignInEmailInput"
          />
          <input
            type="text"
            id="Password"
            name="password"
            className="SignInPasswordInput"
          />
          <input type="submit" value="Sign In" className="SignInSubmit" />
        </form>

        <p className="signInForgotPasswordLink">Forgot Password?</p>
      </div>
    </div>
  </div>
);

export default SignIn;

const SignIn = () => (
  <div className="imageOuter">
    <div className="backgroundImage" />
    <div className="imageInner">
      <h1 className="lightTextWeight">Sign Up</h1>
      <div id="SignInForm">
        <form>
          <input
            type="text"
            id="SignInEmail"
            name="email"
            className="SignInEmailInput"
          />
          <input
            type="text"
            id="SignUpPassword"
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

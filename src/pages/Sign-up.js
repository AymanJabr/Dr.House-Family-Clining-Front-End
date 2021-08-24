const SignUp = () => (
  <div className="singleOuter">
    <div className="backgroundImage" />
    <div className="singleInner">
      <h1 className="lightTextWeight">Sign Up</h1>
      <div id="SignUpForm">
        <form>
          <input
            type="text"
            id="SignUpEmail"
            name="email"
            className="SignUpEmailInput"
          />
          <input
            type="text"
            id="SignUpPassword"
            name="password"
            className="SignUpPasswordInput"
          />
          <input
            type="text"
            id="SignUpConfirmPassword"
            name="confirmPassword"
            className="SignUpPasswordInput"
          />
          <input type="submit" value="Sign Up" className="SignUpSubmit" />
        </form>

        <p className="SignUpSignInLink">Have an account? Sign In</p>
      </div>
    </div>
  </div>
);

export default SignUp;

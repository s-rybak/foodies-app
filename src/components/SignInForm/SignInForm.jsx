
export const SignInForm = () => {
  return (
    <div className="sign-in">
      <h2 className="sign-in__title">Sign in</h2>

      <form className="sign-in__form form">
        <div className="form__inputs">
          <input type="email" placeholder="Email*" className="form__input" />
          <input
            type="password"
            placeholder="Password"
            className="form__input"
          />
        </div>

        <button type="submit" className="form__button">
          Sign in
        </button>
      </form>

      <p className="sign-in__subtitle">
        Don't have an account? <span>Create an account</span>
      </p>
    </div>
  );
};

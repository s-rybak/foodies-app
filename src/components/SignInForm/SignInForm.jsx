import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import icons from "assets/img/icons/icons.svg";

import { selectAuthIsLoading, selectAuthError } from "../../redux/auth/authSelectors";
import { signInUser, signUpUser } from "./../../redux/auth/authOperations";
import css from "./SignInForm.module.css";
import { Error, Loader } from "components";

const SignInForm = ({ variant }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);
  const error = useSelector(selectAuthError);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setShowPassword(false);
  }, [variant]);

  const handleSignUp = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formData = { name, email, password };
    
    dispatch(signUpUser(formData));
    // TODO: clear form form and successful/error message
  }

  const handleSignIn = event => {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formData = { email, password };

    dispatch(signInUser(formData));
    
    // TODO: clear form form and close modal + maybe redirect to some page
    console.log("Submitted SignIn form for user logging in");
  }

  return (
    <div className={css.signIn}>
      <h2 className={css.title}>
        {variant === "sign-in" ? "Sign in" : "Sign up"}
      </h2>
      <form className={css.form} onSubmit={variant === "sign-in" ? handleSignIn : handleSignUp}>
        <div className={css.inputs}>
          {variant === "sign-up" && (
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              className={css.input}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className={css.input}
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password*"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=^[A-Za-z\d@#%^$_!%*?\(\)&]{8,}$).*"
            title="Password should have a minimum length of 8 characters, contain at least one letter (either uppercase or lowercase), at least one digit, may include special characters like @, #, %, ^, $, _, !, %, *, ?, ), (, and &"
            required
            className={css.input}
          />
          <button
            className={css.showPass}
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <svg className={css.icon}>
                <use href={`${icons}#icon-eye`}></use>
              </svg>
            ) : (
              <svg className={css.icon}>
                <use href={`${icons}#icon-eye-off`}></use>
              </svg>
            )}
          </button>
        </div>

        {error && <div className={css["error-container"]}><Error error={error} /></div>}

        <button type="submit" className={css.button}>
          {isLoading ? <Loader /> : variant === "sign-in" ? "Sign in" : "Create"}
        </button>
      </form>

      <p className={css.subtitle}>
        {variant === "sign-in" ? (
          <>
            Don't have an account?{" "}
            <Link to="/foodies-app/auth/sign-up">Create an account</Link>
          </>
        ) : (
          <>
            I already have an account?{" "}
            <Link to="/foodies-app/auth/sign-in">Sign in</Link>
          </>
        )}
      </p>
    </div>
  );
};

export default SignInForm;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import icons from "assets/img/icons/icons.svg";
import css from "./SignInForm.module.css";

import { signInUser, signUpUser } from "./../../redux/auth/authOperations";
import { selectAuthIsLoading, selectAuthError } from "../../redux/auth/authSelectors";
import { resetAuthError } from "../../redux/auth/authSlice";

import { Error, Loader } from "components";
import { AnimatedIconText } from "components/AnimatedIcon/AnimatedIconText";

const SignInForm = ({ variant }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);
  const error = useSelector(selectAuthError);

  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    dispatch(resetAuthError())
  }, [dispatch]);

  const handleSignUp = event => {
    event.preventDefault();
    
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const formData = { name, email, password };
    
    dispatch(signUpUser(formData))
    .then((action) => {
      if (signUpUser.fulfilled.match(action)) {
        setSuccess({
          title: "Registration successful!",
          message: `A verification email has been sent to your email address: ${email}. `
            + "Please check your inbox and follow the instructions to confirm your email."
        });
        form.reset();
      }
    });
  }

  const handleSignIn = async event => {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const formData = { email, password };

    dispatch(signInUser(formData));
  };

  return (
    <div className={css.signIn}>
      <h2 className={css.title}>
        {variant === "sign-in" ? "Sign in" : "Sign up"}
      </h2>

      {success && <AnimatedIconText.Success {...success} />}

      {!success && (
        <>
          <form className={css["signin-form"]} onSubmit={variant === "sign-in" ? handleSignIn : handleSignUp}>
            <div className={css.inputs}>
              {variant === "sign-up" && (
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Name*"
                  required
                  minLength="3"
                  maxLength="100"
                  className={css.input}
                />
              )}
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email*"
                required
                className={css.input}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="current-password"
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

            <button type="submit" className={css.button} disabled={isLoading}>
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
        </>
      )}
    </div>
  );
};

export default SignInForm;

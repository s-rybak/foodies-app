import css from "./SignInForm.module.css";
import icons from "assets/img/icons/icons.svg";
import { useEffect, useState } from "react";
const SignInForm = ({ variant, toggleModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setShowPassword(false);
  }, [variant]);

  return (
    <div className={css.signIn}>
      <h2 className={css.title}>
        {variant === "sign-in" ? "Sign in" : "Sign up"}
      </h2>
      <form className={css.form}>
        <div className={css.inputs}>
          {variant === "sign-up" && (
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className={css.input}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email*"
            className={css.input}
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
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

        <button type="submit" className={css.button}>
          {variant === "sign-in" ? "Sign in" : "Create"}
        </button>
      </form>
      <button type="button" onClick={toggleModal} className={css.subtitle}>
        {variant === "sign-in"
          ? "Don't have an account?"
          : "I already have an account?"}

          <span>
          {variant === "sign-in"
          ? " Create an account"
          : " Sign in"}
          </span>
      </button>
    </div>
  );
};

export default SignInForm;

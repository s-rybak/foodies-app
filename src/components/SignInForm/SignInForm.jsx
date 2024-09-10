import { Link, useLocation } from "react-router-dom";
import css from "./SignInForm.module.css";
import icons from "../../img/icons.svg";
// import cx from "classnames";
import { useEffect, useState } from "react";
export const SignInForm = () => {
  const { pathname } = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const variant = pathname.includes("sign-up") ? "sign-up" : "sign-in";

  useEffect(() => {
    setShowPassword(false);
  }, [pathname]);

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
                <use href={`${icons}#eye`}></use>
              </svg>
            ) : (
              <svg className={css.icon}>
                <use href={`${icons}#eye-slash`}></use>
              </svg>
            )}
          </button>
        </div>

        <button type="submit" className={css.button}>
          {variant === "sign-in" ? "Sign in" : "Create"}
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

import { useState } from "react";
import style from "./EarlyAccess.module.css";

const emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export function EarlyAccess() {
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    if (emailRegExp.test(input)) {
      window.location.reload();
    } else {
      setError(true);
    }
  };

  const onInputChange = function (e) {
    setError(false);
    setInput(e.target.value);
  };

  return (
    <div className={style.containerBackground} id="signin">
      <section className={style.container}>
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form onSubmit={handleSubmit} className={style.form}>
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="on"
              placeholder="email@example.com"
              onChange={(e) => onInputChange(e)}
              className={style.pillShape}
            />
          </label>
          <p className={`${style.errorMessage} ${error ? "" : style.hide}`}>
            Error, please check your email
          </p>
          <button
            type="submit"
            className={`${style.pillShape} btn-link_gradient`}
          >
            get started for free
          </button>
        </form>
      </section>
    </div>
  );
}

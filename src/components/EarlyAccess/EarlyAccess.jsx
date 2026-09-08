import { useState } from "react";
import style from "./EarlyAccess.module.css";

export function EarlyAccess() {
  const [error, setError] = useState(false);

  const handleSubmit = function (e) {
    e.preventDefault();
    setError("true");
    console.log("submit click");
  };

  const onInputChange = function (e) {
    setError(false);
    console.log(e.target.value);
  };

  return (
    <section className={style.container}>
      <h2>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
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
        <button type="submit" className={style.pillShape}>
          get started for free
        </button>
      </form>
    </section>
  );
}

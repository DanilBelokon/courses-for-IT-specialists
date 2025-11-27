import React, {ForwardedRef, forwardRef, JSX} from "react";
import {InputProps} from "./Input.props";
import styles from "./Input.module.css";
import clsx from "clsx";

export const Input = forwardRef(
  (
    {className, error, ...props}: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={clsx(styles.inputWrapper, className)}>
        <input
          className={clsx(styles.input, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        ></input>
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

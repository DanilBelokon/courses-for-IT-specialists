import React, {ForwardedRef, forwardRef, JSX} from "react";
import {InputProps} from "./Input.props";
import styles from "./Input.module.css";
import clsx from "clsx";

export const Input = forwardRef(
  (
    {className, ...props}: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <input
        className={clsx(className, styles.input)}
        ref={ref}
        {...props}
      ></input>
    );
  }
);

Input.displayName = "Input";

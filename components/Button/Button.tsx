import React, {JSX} from "react";
import styles from "./Button.module.css";
import {ButtonProps} from "./Button.props";
import clsx from "clsx";

export const Button = ({
  appearance,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

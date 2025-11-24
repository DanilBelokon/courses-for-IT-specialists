import React, {JSX} from "react";
import {InputProps} from "./Input.props";
import styles from "./Input.module.css";
import clsx from "clsx";

export const Input = ({className, ...props}: InputProps): JSX.Element => {
  return <input className={clsx(className, styles.input)} {...props}></input>;
};

import React, {JSX} from "react";
import styles from "./Divider.module.css";
import clsx from "clsx";
import {DividerProps} from "./Divider.props";

export const Divider = ({className, ...props}: DividerProps): JSX.Element => {
  return <hr className={clsx(className, styles.hr)} {...props}></hr>;
};

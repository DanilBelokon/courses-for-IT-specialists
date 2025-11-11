import React, {JSX} from "react";
import {PProps} from "./P.props";
import styles from "./P.module.css";
import clsx from "clsx";

export const P = ({
  size = "M",
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={clsx(styles.p, className, {
        [styles.m]: size === "M",
        [styles.s]: size === "S",
        [styles.l]: size === "L",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

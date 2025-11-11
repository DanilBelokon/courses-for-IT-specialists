import React, {JSX} from "react";
import styles from "./Tag.module.css";
import clsx from "clsx";
import {TagProps} from "./Tag.props";

export const Tag = ({
  size = "S",
  children,
  color = "ghost",
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={clsx(styles.tag, className, {
        [styles.m]: size === "M",
        [styles.s]: size === "S",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.gray]: color === "gray",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

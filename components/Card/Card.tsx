import React, {JSX} from "react";
import styles from "./Card.module.css";
import {CardProps} from "./Card.props";
import clsx from "clsx";

export const Card = ({
  color,
  children,
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={clsx(styles.card, className, {
        [styles.blue]: color === "blue",
      })}
      {...props}
    >
      {children}
    </div>
  );
};

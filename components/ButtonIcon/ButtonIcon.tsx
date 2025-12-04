import React, {JSX} from "react";
import styles from "./ButtonIcon.module.css";
import {ButtonIconProps, icons} from "./ButtonIcon.props";
import clsx from "clsx";

export const ButtonIcon = ({
  appearance,
  className,
  icon,
  ...props
}: ButtonIconProps): JSX.Element => {
  const IconComp = icons[icon];

  return (
    <button
      className={clsx(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.white]: appearance === "white",
      })}
      {...props}
    >
      <IconComp></IconComp>
    </button>
  );
};

"use client";
import React, {JSX} from "react";
import styles from "./Button.module.css";
import {ButtonProps} from "./Button.props";
import clsx from "clsx";
import ArrowIcon from "@/public/arrow.svg";
import {motion} from "framer-motion";

export const Button = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <motion.button
      whileHover={{scale: 1.05}}
      className={clsx(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <ArrowIcon
          className={clsx(styles.arrow, {
            [styles.down]: arrow === "down",
            [styles.right]: arrow === "right",
          })}
        />
      )}
    </motion.button>
  );
};

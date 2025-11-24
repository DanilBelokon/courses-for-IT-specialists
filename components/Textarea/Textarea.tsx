import React, {JSX} from "react";

import styles from "./Textarea.module.css";
import clsx from "clsx";
import {TextareaProps} from "./Textarea.props";

export const Textarea = ({className, ...props}: TextareaProps): JSX.Element => {
  return (
    <textarea
      className={clsx(className, styles.textarea)}
      {...props}
    ></textarea>
  );
};

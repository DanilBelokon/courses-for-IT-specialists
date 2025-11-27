import React, {ForwardedRef, forwardRef, JSX} from "react";

import styles from "./Textarea.module.css";
import clsx from "clsx";
import {TextareaProps} from "./Textarea.props";

export const Textarea = forwardRef(
  (
    {className, ...props}: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <textarea
        className={clsx(className, styles.textarea)}
        {...props}
        ref={ref}
      ></textarea>
    );
  }
);

Textarea.displayName = "Textarea";

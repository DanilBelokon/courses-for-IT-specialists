import React, {ForwardedRef, forwardRef, JSX} from "react";

import styles from "./Textarea.module.css";
import clsx from "clsx";
import {TextareaProps} from "./Textarea.props";

export const Textarea = forwardRef(
  (
    {className, error, ...props}: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className={clsx(styles.textareaWrapper, className)}>
        <textarea
          className={clsx(styles.textarea, {
            [styles.error]: error,
          })}
          {...props}
          ref={ref}
        ></textarea>
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

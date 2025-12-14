"use client";

import clsx from "clsx";
import {useState} from "react";
import styles from "./SkipLink.module.css";

export function SkipLink() {
  const [isskipLinkDisplay, setIsSkipLinkDisplay] = useState<boolean>(false);

  return (
    <a
      href="#main-content"
      onFocus={() => setIsSkipLinkDisplay(true)}
      onBlur={() => setIsSkipLinkDisplay(false)}
      tabIndex={1}
      className={clsx(styles.skipLink, {
        [styles.displayed]: isskipLinkDisplay,
      })}
    >
      Сразу к содержанию
    </a>
  );
}

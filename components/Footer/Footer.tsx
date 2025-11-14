import React, {JSX} from "react";
import styles from "./Footer.module.css";
import {FooterProps} from "./Footer.props";
import clsx from "clsx";

export const Footer = ({...props}: FooterProps): JSX.Element => {
  return (
    <div {...props}>
      <div className={styles.wrapper}>
        <p className={clsx(styles.info, styles.text)}>
          OwlTop © 2020 - 2021 Все права защищены
        </p>
        <p className={clsx(styles.nda, styles.text)}>
          Пользовательское соглашение
        </p>
        <p className={clsx(styles.conf, styles.text)}>
          Политика конфиденциальности
        </p>
      </div>
    </div>
  );
};

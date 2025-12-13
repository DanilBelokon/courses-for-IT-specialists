"use client";

import React, {JSX, useEffect, useState} from "react";
import styles from "./Header.module.css";
import {HeaderProps} from "./Header.props";
import clsx from "clsx";
import Logo from "../../public/logo.svg";
import {ButtonIcon} from "../ButtonIcon/ButtonIcon";
import {motion} from "framer-motion";
import {Sidebar} from "../Sidebar/Sidebar";
import {usePathname} from "next/navigation";

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = usePathname();
  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      // transition: {
      //   stiffness: 20,
      // },
    },
    closed: {
      opacity: 0,
      x: "100%",
    },
  };
  useEffect(() => {
    setIsOpened(false);
  }, [router]);
  return (
    <header className={clsx(className, styles.header)} {...props}>
      <Logo></Logo>
      <ButtonIcon
        appearance="white"
        icon="menu"
        onClick={() => setIsOpened(true)}
      ></ButtonIcon>
      <motion.div
        variants={variants}
        initial="closed"
        animate={isOpened ? "opened" : "closed"}
        className={styles.mobileMenu}
      >
        <Sidebar></Sidebar>
        <ButtonIcon
          className={styles.menuClose}
          appearance="white"
          icon="menu"
          onClick={() => setIsOpened(false)}
        ></ButtonIcon>
      </motion.div>
    </header>
  );
};

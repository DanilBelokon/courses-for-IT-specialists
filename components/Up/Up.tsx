"use client";

import React, {JSX, useEffect} from "react";
import styles from "./Up.module.css";
import clsx from "clsx";
import UpIcon from "./up.svg";
import {useScrollY} from "@/hooks/useScrollY";
import {useAnimation} from "framer-motion";
import {motion} from "framer-motion";
import {ButtonIcon} from "../ButtonIcon/ButtonIcon";

export const Up = (): JSX.Element => {
  const controls = useAnimation();

  const y = useScrollY();

  useEffect(() => {
    controls.start({opacity: y / document.body.scrollHeight});
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.div className={styles.up} animate={controls} initial={{opacity: 0}}>
      <ButtonIcon
        onClick={scrollToTop}
        appearance="primary"
        icon="up"
      ></ButtonIcon>
    </motion.div>
  );
};

import React, {JSX} from "react";
import styles from "./Sidebar.module.css";
import {SidebarProps} from "./Sidebar.props";
import Menu from "@/app/components/Menu/Menu";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import clsx from "clsx";
import {Search} from "../Search/Search";

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
  return (
    <div className={clsx(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo}></Logo>
      <Search></Search>
      <Menu></Menu>
    </div>
  );
};

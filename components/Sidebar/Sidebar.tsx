import React, {JSX} from "react";
import styles from "./Sidebar.module.css";
import {SidebarProps} from "./Sidebar.props";
import Menu from "@/app/components/Menu/Menu";
import Link from "next/link";

export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Link href={`/search`}>Поиск</Link>
      <Menu></Menu>
    </div>
  );
};

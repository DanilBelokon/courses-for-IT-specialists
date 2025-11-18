import React, {JSX} from "react";
import styles from "./Sidebar.module.css";
import {SidebarProps} from "./Sidebar.props";
import Menu from "@/app/components/Menu";

export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu></Menu>
    </div>
  );
};

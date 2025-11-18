import getMenu from "@/lib/api/menu";
import {JSX} from "react";
import styles from "./Menu.module.css";
import MenuClient from "./MenuClient";

export default async function Menu(): Promise<JSX.Element> {
  const firstCategory = 0;
  const menu = await getMenu(firstCategory);

  return (
    <div className={styles.menu}>
      <MenuClient firstCategory={firstCategory} menu={menu}></MenuClient>
    </div>
  );
}

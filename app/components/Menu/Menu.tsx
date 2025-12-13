"use client";

import getMenu from "@/lib/api/menu";
import {JSX, useEffect, useState} from "react";
import styles from "./Menu.module.css";
import MenuClient from "./MenuClient";
import {MenuItem} from "@/interfaces/menu.interface";

export default function Menu() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true); // ← добавить
  const firstCategory = 0;
  useEffect(() => {
    const fetchGetMenu = async () => {
      try {
        const res = await getMenu(firstCategory);
        setMenu(res);
      } catch (error) {
        console.error("Ошибка загрузки меню:", error);
      } finally {
        setLoading(false); // ← добавить
      }
    };
    fetchGetMenu();
  }, []);

  if (loading) {
    return <div className={styles.menu}>Загрузка...</div>;
  }

  return (
    <div className={styles.menu}>
      {menu && (
        <MenuClient firstCategory={firstCategory} menu={menu}></MenuClient>
      )}
    </div>
  );
}

"use client";

import {MenuItem, PageItem} from "@/interfaces/menu.interface";
import {KeyboardEvent, useState} from "react";
import {JSX} from "react";
import styles from "./Menu.module.css";
import clsx from "clsx";
import Link from "next/link";
import {usePathname} from "next/navigation";
import firstLevelMenu from "@/helpers/helpers";
import {motion} from "framer-motion";

export default function MenuClient({
  firstCategory,
  menu,
}: {
  firstCategory: number;
  menu: MenuItem[];
}): JSX.Element {
  const pathname = usePathname();
  const [openedMenus, setOpenedMenus] = useState<string[]>([]);

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {marginBottom: 0},
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: "auto",
    },
    hidden: {opacity: 0, height: 0},
  };

  const openSecondLevel = (secondCategory: string) => {
    setOpenedMenus((prev) =>
      prev.includes(secondCategory)
        ? prev.filter((item) => item !== secondCategory)
        : [...prev, secondCategory]
    );
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code === "Space" || key.code === "Enter") {
      key.preventDefault();

      setOpenedMenus((prev) =>
        prev.includes(secondCategory)
          ? prev.filter((item) => item !== secondCategory)
          : [...prev, secondCategory]
      );
    }
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
            <Link href={`/${menu.route}`}>
              <div
                className={clsx(styles.firstLevel, {
                  [styles.firstLevelActive]: menu.id === firstCategory,
                })}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </Link>
            {menu.id === firstCategory && buildSecondLevel(menu.route)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (route: string) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => {
          const currentAlias = pathname?.split("/")[2];
          if (m.pages.map((p) => p.alias).includes(currentAlias)) {
            m.isOpenen = true;
          }
          m.isOpenen =
            openedMenus.includes(m._id.secondCategory) ||
            m.pages.map((p) => p.alias).includes(currentAlias);
          return (
            <div key={m._id.secondCategory}>
              <div
                tabIndex={0}
                onKeyDown={(key: KeyboardEvent) =>
                  openSecondLevelKey(key, m._id.secondCategory)
                }
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <motion.div
                layout
                variants={variants}
                initial={m.isOpenen ? "visible" : "hidden"}
                animate={m.isOpenen ? "visible" : "hidden"}
                className={clsx(styles.secondLevelBlock)}
              >
                {buildThirdLevel(m.pages, route, m.isOpenen)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (
    pages: PageItem[],
    route: string,
    isOpened: boolean
  ) => {
    return pages.map((p) => (
      <motion.div
        key={p.alias}
        variants={variantsChildren}
        style={{overflow: "hidden"}}
      >
        <Link
          tabIndex={isOpened ? 0 : -1}
          href={`/${route}/${p.alias}`}
          className={clsx(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` === pathname,
          })}
        >
          {p.category}
        </Link>
      </motion.div>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
}

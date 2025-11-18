import {
  FirstLevelMenuItem,
  MenuItem,
  PageItem,
} from "@/interfaces/menu.interface";
import getMenu from "@/lib/api/menu";
import {JSX} from "react";
import ServicesIcon from "./icons/services.svg";
import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import {TopLevelCategory} from "@/interfaces/page.interface";
import styles from "./Menu.module.css";
import clsx from "clsx";
import Link from "next/link";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon></CoursesIcon>,
    id: TopLevelCategory.Courses,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon></BooksIcon>,
    id: TopLevelCategory.Books,
  },

  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon></ServicesIcon>,
    id: TopLevelCategory.Services,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon></ProductsIcon>,
    id: TopLevelCategory.Products,
  },
];

export default async function Menu(): Promise<JSX.Element> {
  const firstCategory = 0;
  const menu = await getMenu(firstCategory);

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
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={clsx(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpenen,
              })}
            >
              {buildThirdLevel(m.pages, route)}
            </div>
          </div>
        ))}
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link
        key={p.alias}
        href={`/${route}/${p.alias}`}
        className={clsx(styles.thirdLevel, {
          [styles.thirdLevelActive]: false,
        })}
      >
        {p.category}
      </Link>
    ));
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
      {/* <ul>
        {menu.map((item: MenuItem) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul> */}
    </div>
  );
}

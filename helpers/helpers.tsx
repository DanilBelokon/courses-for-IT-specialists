import ServicesIcon from "./icons/services.svg";
import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import {TopLevelCategory} from "@/interfaces/page.interface";
import {FirstLevelMenuItem} from "@/interfaces/menu.interface";

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

export const priceRu = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" ₽");
export default firstLevelMenu;

import {MenuItem} from "@/interfaces/menu.interface";
import getMenu from "@/lib/api/menu";

export default async function Menu() {
  const menu = await getMenu(0);
  return (
    <>
      <ul>
        {menu.map((item: MenuItem) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

import getMenu from "@/lib/api/menu";
import getPage from "@/lib/api/page";
import getProducts from "@/lib/api/product";
import {Metadata} from "next";
import {notFound} from "next/navigation";

export const metadata: Metadata = {
  title: "Страница",
};

export async function generateStaticParams() {
  const menu = await getMenu(0);
  return menu.flatMap((item) =>
    item.pages.map((page) => ({alias: page.alias}))
  );
}

export default async function PageProducts({
  params,
}: {
  params: Promise<{alias: string}>;
}) {
  const {alias} = await params;
  const page = await getPage(alias);
  let products;
  if (page) {
    products = await getProducts(page.category);
  }
  if (!page) {
    notFound();
  }
  return (
    <div>
      <div>{page.title}</div>
      <div>{products.length}</div>
    </div>
  );
}

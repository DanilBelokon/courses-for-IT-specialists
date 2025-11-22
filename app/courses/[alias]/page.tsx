import {Advantages, HHData, Htag, P, Tag} from "@/components";
import getMenu from "@/lib/api/menu";
import getPage from "@/lib/api/page";
import getProducts from "@/lib/api/product";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import styles from "./page.module.css";

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
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        <Tag size="M" color="gray">
          {products && products.length}
        </Tag>
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p.title}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag size="M" color="red">
          hh.ru
        </Tag>
      </div>
      {page.hh && <HHData {...page.hh}></HHData>}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages}></Advantages>
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seoText}
          dangerouslySetInnerHTML={{__html: page.seoText}}
        ></div>
      )}
      {page.tags && (
        <>
          <Htag tag="h2">Получаемые навыки</Htag>
          {page.tags.map((tag) => (
            <Tag className={styles.tagSkill} key={tag} color="primary">
              {tag}
            </Tag>
          ))}
        </>
      )}
    </div>
  );
}

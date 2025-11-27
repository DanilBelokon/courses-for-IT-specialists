"use client";

import {Htag, Product, Sort, Tag} from "@/components";
import {ProductModel} from "@/interfaces/product.interface";
import styles from "./page.module.css";
import {SortEnum} from "@/components/Sort/Sort.props";
import {useEffect, useReducer} from "react";
import {sortReducer} from "@/components/Sort/sortReducer";

export default function SortableProducts({
  products,
  title,
}: {
  title: string;
  products: ProductModel[];
}) {
  const [{products: sortedProducts, sort}, dispatchSort] = useReducer(
    sortReducer,
    {
      products: [...products].sort((a, b) =>
        a.initialRating > b.initialRating ? -1 : 1
      ),
      sort: SortEnum.Rating,
    }
  );

  const setSort = (sort: SortEnum) => {
    dispatchSort({type: sort});
  };

  return (
    <>
      <div className={styles.title}>
        <Htag tag="h1">{title}</Htag>
        <Tag size="M" color="gray">
          {sortedProducts && sortedProducts.length}
        </Tag>
        <Sort sort={sort} setSort={setSort}></Sort>
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((p) => (
            <Product product={p} key={p._id}></Product>
          ))}
      </div>
    </>
  );
}

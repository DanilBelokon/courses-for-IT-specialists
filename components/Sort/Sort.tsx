"use client";

import React, {JSX} from "react";
import styles from "./Sort.module.css";
import {SortEnum, SortProps} from "./Sort.props";
import SortIcon from "./sort.svg";
import clsx from "clsx";

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={clsx(styles.sort, className)} {...props}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={clsx({
          [styles.active]: sort === SortEnum.Rating,
        })}
      >
        <SortIcon className={styles.sortIcon}></SortIcon>По рейтингу
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={clsx({
          [styles.active]: sort === SortEnum.Price,
        })}
      >
        <SortIcon className={styles.sortIcon}></SortIcon>По цене
      </span>
    </div>
  );
};

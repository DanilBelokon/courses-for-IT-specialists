"use client";

import React, {JSX, useState, KeyboardEvent} from "react";
import {SearchProps} from "./Search.props";
import styles from "./Search.module.css";
import clsx from "clsx";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import GlassIcon from "./glass.svg";
import {useRouter} from "next/navigation";

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const goToSearch = () => {
    router.push(`/search?q=${encodeURIComponent(search)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={clsx(styles.search, className)} {...props}>
      <Input
        className={styles.input}
        placeholder="поиск"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      ></Input>
      <Button
        appearance="primary"
        className={styles.button}
        onClick={goToSearch}
      >
        <GlassIcon></GlassIcon>
      </Button>
    </div>
  );
};

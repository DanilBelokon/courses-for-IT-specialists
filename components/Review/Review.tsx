import React, {JSX} from "react";
import styles from "./Review.module.css";
import {ReviewProps} from "./Review.props";
import UserIcon from "./user.svg";
import clsx from "clsx";
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import {Rating} from "../Rating/Rating";

export const Review = ({
  review,
  className,
  ...props
}: ReviewProps): JSX.Element => {
  const {name, title, description, rating, createdAt} = review;
  return (
    <div className={clsx(styles.review, className)} {...props}>
      <UserIcon className={styles.user}></UserIcon>
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), "dd MMMM yyyy", {locale: ru})}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating}></Rating>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

"use client";

import React, {JSX, useEffect, useState, KeyboardEvent} from "react";
import styles from "./Rating.module.css";
import clsx from "clsx";
import {RatingProps} from "./Rating.props";
import StarIcon from "./star.svg";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(null)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          key={i}
          className={clsx(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDispay(i + 1)}
          onMouseLeave={() => changeDispay(rating)}
          onClick={() => onClick(i + 1)}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<HTMLElement>) =>
            isEditable && handleSpace(i + 1, e)
          }
        >
          <StarIcon></StarIcon>
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDispay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<HTMLElement>) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(i);
  };
  return <div {...props}>{ratingArray}</div>;
};

import React, {JSX} from "react";
import styles from "./ReviewForm.module.css";
import CloseItem from "./close.svg";
import clsx from "clsx";
import {ReviewFormProps} from "./ReviewForm.props";
import {Input} from "../Input/Input";
import {Textarea} from "../Textarea/Textarea";
import {Rating} from "../Rating/Rating";
import {Button} from "../Button/Button";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  return (
    <>
      <div className={clsx(styles.reviewForm, className)} {...props}>
        <Input placeholder="Имя"></Input>
        <Input className={styles.title} placeholder="Заголовок отзыва"></Input>
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0}></Rating>
        </div>
        <Textarea
          className={styles.description}
          placeholder="Текст отзыва"
        ></Textarea>
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
        <CloseItem className={styles.close}></CloseItem>
      </div>
    </>
  );
};

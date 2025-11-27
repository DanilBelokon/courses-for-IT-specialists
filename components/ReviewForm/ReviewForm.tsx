import React, {JSX} from "react";
import styles from "./ReviewForm.module.css";
import CloseItem from "./close.svg";
import clsx from "clsx";
import {ReviewFormProps} from "./ReviewForm.props";
import {Input} from "../Input/Input";
import {Textarea} from "../Textarea/Textarea";
import {Rating} from "../Rating/Rating";
import {Button} from "../Button/Button";
import {Controller, useForm} from "react-hook-form";
import {IReviewForm} from "./ReviewForm.interface";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={clsx(styles.reviewForm, className)} {...props}>
        <Input
          {...register("name", {
            required: "Заполните имя!",
          })}
          placeholder="Имя"
          error={errors.name}
        ></Input>
        <Input
          {...register("title", {
            required: "Заполните заголовок!",
          })}
          className={styles.title}
          placeholder="Заголовок отзыва"
          error={errors.title}
        ></Input>
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{required: "Поставьте оценку!"}}
            render={({field}) => (
              <Rating
                isEditable
                rating={field.value}
                ref={field.ref}
                setRating={field.onChange}
                error={errors.rating}
              ></Rating>
            )}
          ></Controller>
        </div>
        <Textarea
          {...register("description", {
            required: "Заполните ваш отзыв",
          })}
          className={styles.description}
          placeholder="Текст отзыва"
          error={errors.description}
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
    </form>
  );
};

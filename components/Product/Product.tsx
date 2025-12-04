"use client";

import React, {JSX, useRef, useState} from "react";
import styles from "./Product.module.css";
import clsx from "clsx";
import {ProductProps} from "./Product.props";
import {Card} from "../Card/Card";
import Image from "next/image";
import {Rating} from "../Rating/Rating";
import {Tag} from "../Tag/Tag";
import {Button} from "../Button/Button";
import {declOfNum, priceRu} from "@/helpers/helpers";
import {Divider} from "../Divider/Divider";
import {Review} from "../Review/Review";
import {ReviewForm} from "../ReviewForm/ReviewForm";
import {motion, AnimatePresence} from "framer-motion";

export const Product = motion.create(
  ({product, className, ...props}: ProductProps): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const scrollToReview = () => {
      setIsReviewOpened(true);
      reviewRef.current?.scrollIntoView({behavior: "smooth", block: "start"});
    };

    const variants = {
      visible: {
        opacity: 1,
        height: "auto",
        pointerEvents: "auto",
      },
      hidden: {
        opacity: 0,
        height: 0,
        pointerEvents: "none",
      },
    };

    return (
      <div className={className} {...props}>
        <Card className={styles.product}>
          <div className={styles.logo}>
            <Image src={product.image} alt="Img" width="70" height="70"></Image>
          </div>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.price}>
            {priceRu(product.price)}
            {product.oldPrice && (
              <Tag className={styles.oldPrice} color="green">
                {priceRu(product.price - product.oldPrice)}
              </Tag>
            )}
          </div>
          <div className={styles.credit}>
            {priceRu(product.credit)} <span className={styles.month}>/мес</span>
          </div>
          <div className={styles.rating}>
            <Rating
              rating={product.reviewAvg ?? product.initialRating}
            ></Rating>
          </div>
          <div className={styles.tags}>
            {product.categories.map((c) => (
              <Tag className={styles.category} key={c} color="ghost">
                {c}
              </Tag>
            ))}
          </div>
          <div className={styles.priceTitle}>цена</div>
          <div className={styles.creditTitle}>кредит</div>
          <div className={styles.rateTitle}>
            {product.reviewCount}{" "}
            <a href="#ref" onClick={scrollToReview}>
              {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
            </a>
          </div>
          <Divider className={styles.hr}></Divider>
          <div className={styles.description}>{product.description}</div>
          <div className={styles.feature}>
            {product.characteristics.map((c) => (
              <div className={styles.characteristics} key={c.name}>
                <span className={styles.characteristicsName}>{c.name}</span>
                <span className={styles.characteristicsDots}></span>
                <span className={styles.characteristicsValue}>{c.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.advBlock}>
            {product.advantages && (
              <div className={styles.advantages}>
                <div className={styles.advTitle}>Преимущества</div>
                <div>{product.advantages}</div>
              </div>
            )}
            {product.disadvantages && (
              <div className={styles.disadvantages}>
                <div className={styles.advTitle}>Недостатки</div>
                <div>{product.disadvantages}</div>
              </div>
            )}
          </div>
          <Divider className={clsx(styles.hr, styles.hr2)}></Divider>
          <div className={styles.actions}>
            <Button appearance="primary">Узнать подробнее</Button>
            <Button
              className={styles.reviewButton}
              appearance="ghost"
              arrow={isReviewOpened ? "down" : "right"}
              onClick={() => setIsReviewOpened(!isReviewOpened)}
            >
              Читать отзывы
            </Button>
          </div>
        </Card>
        <AnimatePresence>
          {isReviewOpened && (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Card className={styles.reviews} color="blue" ref={reviewRef}>
                {product.reviews.map((r) => (
                  <React.Fragment key={r._id}>
                    <Review key={r._id} review={r}></Review>
                    <Divider></Divider>
                  </React.Fragment>
                ))}
                <ReviewForm productId={product._id}></ReviewForm>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

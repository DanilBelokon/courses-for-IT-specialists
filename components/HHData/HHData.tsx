import React, {JSX} from "react";
import styles from "./HHData.module.css";
import {Card} from "../Card/Card";
import RateIcon from "./rate.svg";
import {HHDataProps} from "./HHData.props";

export const HHData = ({
  count,
  juniorSalary,
  seniorSalary,
  middleSalary,
}: HHDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div className={styles.graid}>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{juniorSalary}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div className={styles.graid}>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{middleSalary}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon />
          </div>
        </div>
        <div className={styles.graid}>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{seniorSalary}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};

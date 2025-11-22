import React, {JSX} from "react";
import styles from "./Advantages.module.css";
import {AdvantagesProps} from "./Advantages.props";
import AdvantageIcon from "./advantage.svg";

export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
  return (
    <div className={styles.advantages}>
      {advantages.map((adv) => (
        <div key={adv._id} className={styles.advantageItem}>
          <div className={styles.titleAdvantege}>
            <AdvantageIcon></AdvantageIcon>
            <span>{adv.title}</span>
          </div>
          <div className={styles.advantageDescription}>{adv.description}</div>
        </div>
      ))}
    </div>
  );
};

import React from "react";
import jarron from "../../asset/images/jarron.jpg";
import sillaGris from "../../asset/images/sillaGris.jpg";

import styles from "./styles.module.scss";

export default () => {
  return (
    <div className={styles.sectionArticle}>
      <div className={styles.sectionImag}>
        <img src={sillaGris} alt="" />
      </div>
      <div className={styles.titleSection}>
        <h1>
          Hawkins <br /> New York <br />
          <span>Lorem ipsum dolor sit amet.</span>
        </h1>
      </div>

      <div className={styles.emptyBox}>
        <img src={jarron} alt="sofa" />
      </div>
    </div>
  );
};

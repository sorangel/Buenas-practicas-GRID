import React from "react";
import sofaCama from "../../asset/images/images (1).jpeg";
import mesa from "../../asset/images/mesa.jpeg";

import styles from "./styles.module.scss";

export default () => {
  return (
    <div>
      <div className={styles.sectionArticle}>
        <div className={styles.emptyBox}>
          <img src={sofaCama} alt="sofa" />
        </div>
        <div className={styles.titleArticle}>
          <h1>
            Sofa <br /> Collections <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </h1>
        </div>
        <div className={styles.articleImag}>
          <img src={mesa} alt="" />
        </div>
      </div>
    </div>
  );
};

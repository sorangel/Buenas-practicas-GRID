import React from "react";

import styles from "././styles.module.scss";

export default () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.header}>
        <div className={styles.box_title}>
          <h1>
            <span className={styles.title2}>SUNO POUF</span> <br />
            <span className={styles.title3}>
              Light Grey <br />
              Hybrid
            </span>
          </h1>
          <div className={styles.button}>
            <button className={styles.button}>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

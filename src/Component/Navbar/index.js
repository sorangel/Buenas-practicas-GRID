import React from "react";
import Logo from "../Logo";
import { MdAddShoppingCart, MdAccountCircle, MdSearch } from "react-icons/md";

import styles from "./styles.module.scss";

export default () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div>
            <Logo className={styles.logo} />
          </div>

          <ul>
            <li>
              <a href="#" classNam={styles.selected}>
                Home
              </a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a hef="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact </a>
            </li>
          </ul>

          <div className={styles.divider}></div>

          <div className={styles.socialMedia}>
            <a href="#">
              <MdAddShoppingCart className={styles.socialMedia} />
            </a>
            <a href="#">
              <MdAccountCircle className={styles.socialMedia} />
            </a>
            <a href="#">
              <MdSearch className={styles.socialMedia} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

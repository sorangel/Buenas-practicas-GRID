import React from "react";
import Navbar from "../../Component/Navbar";
import Header from "../../Component/Header";
import Article from "../../Component/Article";
import Section from "../../Component/Section";

import styles from "./styles.module.scss";

export default () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Header />
      <Article />
      <Section />
    </div>
  );
};

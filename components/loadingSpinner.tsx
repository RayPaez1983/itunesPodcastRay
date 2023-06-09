/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/styles/spinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.mainSpinner}>
      <div className={styles.mainSpinner_content}>
        <div className={styles.content_one}></div>
        <div className={styles.content_two}></div>
        <div className={styles.content_three}></div>
        <div className={styles.content_four}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

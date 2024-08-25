import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastPlaygroundControls from "../ToastPlaygroundControls";
import ToastPlaygroundHeader from "../ToastPlaygroundHeader";

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <ToastPlaygroundHeader />
      <ToastPlaygroundControls />
    </div>
  );
}

export default ToastPlayground;

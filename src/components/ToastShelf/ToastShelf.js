import React from "react";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts }) {
  return (
    <ol className={styles.wrapper}>
      {Object.keys(toasts).map((toastId) => {
        return (
          <li key={toastId} className={styles.toastWrapper}>
            {toasts[toastId]}
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;

import React from "react";
import styles from "../ToastPlayground/ToastPlayground.module.css";

function ToastPlaygroundMessage({ toastMessage, setToastMessage }) {
  return (
    <div className={styles.row}>
      <label
        htmlFor="message"
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id="message"
          className={styles.messageInput}
          value={toastMessage}
          onChange={(event) => setToastMessage(event.target.value)}
        />
      </div>
    </div>
  );
}

export default ToastPlaygroundMessage;

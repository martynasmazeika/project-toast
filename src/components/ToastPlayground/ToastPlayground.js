import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastPlaygroundHeader from "../ToastPlaygroundHeader";
import ToastPlaygroundMessage from "../ToastPlaygroundMessage";
import ToastVariant from "../ToastVariant";
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState("");
  const [selectedToastVariant, setSelectedToastVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );
  return (
    <div className={styles.wrapper}>
      <ToastPlaygroundHeader />
      <div className={styles.controlsWrapper}>
        <ToastPlaygroundMessage
          toastMessage={toastMessage}
          setToastMessage={setToastMessage}
        />
        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          {VARIANT_OPTIONS.map((variantValue) => (
            <ToastVariant
              key={variantValue}
              selectedVariant={selectedToastVariant}
              setSelectedVariant={setSelectedToastVariant}
              variantValue={variantValue}
            />
          ))}
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;

import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastPlaygroundHeader from "../ToastPlaygroundHeader";
import ToastPlaygroundMessage from "../ToastPlaygroundMessage";
import ToastVariant from "../ToastVariant";
import Toast from "../Toast";
import useToggle from "../../hooks/useToggle";
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState("Initial Message");
  const [selectedToastVariant, setSelectedToastVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );
  const [showToast, toggleToast] = useToggle();
  return (
    <div className={styles.wrapper}>
      {showToast && (
        <Toast
          variant={selectedToastVariant}
          message={toastMessage}
          toggleToast={toggleToast}
        />
      )}
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
            <Button onClick={toggleToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;

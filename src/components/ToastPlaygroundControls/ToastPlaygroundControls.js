import React from "react";
import styles from "../ToastPlayground/ToastPlayground.module.css";
import Button from "../Button";
import ToastPlaygroundMessage from "../ToastPlaygroundMessage";
import ToastVariant from "../ToastVariant";
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlaygroundControls() {
  const [toastMessage, setToastMessage] = React.useState("");
  const [selectedToastVariant, setSelectedToastVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );

  console.log(selectedToastVariant);
  return (
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
  );
}

export default ToastPlaygroundControls;

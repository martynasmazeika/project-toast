import React, { useCallback } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastPlaygroundHeader from "../ToastPlaygroundHeader";
import ToastPlaygroundMessage from "../ToastPlaygroundMessage";
import ToastVariant from "../ToastVariant";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState("Initial Message");
  const [selectedToastVariant, setSelectedToastVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );

  const { toasts, popToast, destroyAllToasts } = React.useContext(ToastContext);

  const destroyToasts = useCallback((event) => {
    if (event.key === "Escape") {
      destroyAllToasts();
    }
  }, []);
  React.useEffect(() => {
    document.addEventListener("keydown", destroyToasts);

    return () => {
      document.removeEventListener("keydown", destroyToasts);
    };
  }, [destroyToasts]);

  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          popToast(selectedToastVariant, toastMessage);
        }}
      >
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
      </form>
      <ToastShelf toasts={toasts}></ToastShelf>
    </div>
  );
}

export default ToastPlayground;

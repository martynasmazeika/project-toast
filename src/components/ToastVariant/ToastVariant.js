import React from "react";
import styles from "../ToastPlayground/ToastPlayground.module.css";

function ToastVariant({ selectedVariant, setSelectedVariant, variantValue }) {
  return (
    <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
      <label htmlFor={`variant-${variantValue}`}>
        <input
          id={`variant-${variantValue}`}
          type="radio"
          name="variant"
          checked={selectedVariant === variantValue}
          value={variantValue}
          onChange={() => setSelectedVariant(variantValue)}
        />
        {variantValue}
      </label>
    </div>
  );
}

export default ToastVariant;

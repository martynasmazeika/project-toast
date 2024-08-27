import React from "react";
import Toast from "../components/Toast";

function useToast() {
  const [toasts, setToasts] = React.useState({});

  const destroyToast = React.useCallback(function destroyToast(toastId) {
    setToasts((currentToasts) => {
      const nextToasts = { ...currentToasts };
      delete nextToasts[toastId];
      return nextToasts;
    });
  }, []);

  const destroyAllToasts = React.useCallback(function destroyToasts() {
    setToasts([]);
  }, []);

  const popToast = React.useCallback(
    function popToast(variant, message) {
      setToasts((currentToasts) => {
        const nextToasts = { ...currentToasts };
        const newToastId = crypto.randomUUID();
        nextToasts[newToastId] = (
          <Toast
            key={newToastId}
            variant={variant}
            message={message}
            destroyToast={() => destroyToast(newToastId)}
          />
        );
        return nextToasts;
      });
    },
    [destroyToast]
  );

  return [toasts, popToast, destroyAllToasts];
}

export default useToast;

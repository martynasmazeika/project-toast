import React from "react";
import useToast from "../../hooks/usePopToast";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, popToast, destroyAllToasts] = useToast();

  return (
    <ToastContext.Provider value={{ toasts, popToast, destroyAllToasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

import React, { useCallback } from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [callback]);
}

export default useEscapeKey;

import React from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);
  const toggleValue = React.useMemo(
    () =>
      function setToggle() {
        setValue((currentValue) => !currentValue);
      },
    []
  );

  return [value, toggleValue];
}

export default useToggle;

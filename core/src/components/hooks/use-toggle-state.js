import { useState } from "react";

const useToggleHook = () => {
  const [state, setOpen] = useState(false);

  const toggleComponent = () => {
    setOpen(!state);
  };

  return { toggleComponent, state ,setOpen};
};

export default useToggleHook;

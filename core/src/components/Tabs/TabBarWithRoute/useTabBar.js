import { useState, useEffect } from "react";

const useTabBarHook = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    location.pathname == preUrl && redirectTo && navigate(`${data[0]?.value}/`);
  }, [redirectTo]);

  return { handleChange, value };
};

export default useTabBarHook;

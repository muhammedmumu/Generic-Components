import { useState } from "react";

const useAreaGraphHook = () => {
  const [isDisabled, setIsDisabled] = useState([]);
  const [render, setRerender] = useState(false);
  const hideShowGraphLegendClick = (payload) => {
    let disabledGraph = [];
    disabledGraph = isDisabled;
    if (disabledGraph.includes(payload.dataKey)) {
      var index = disabledGraph.indexOf(payload.dataKey);
      disabledGraph.splice(index, 1);
    } else {
      disabledGraph.push(payload.dataKey);
    }
    setIsDisabled(disabledGraph);
    render ? setRerender(false) : setRerender(true);
  };

  return { render, isDisabled, hideShowGraphLegendClick, setIsDisabled };
};

export default useAreaGraphHook;

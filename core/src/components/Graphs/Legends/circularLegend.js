import React, { useEffect } from "react";
import { Box, Tooltip } from "@mui/material";
import { Surface, Symbols } from "recharts";
import Legends from "./refDots";
import { areaGraph } from "./constant";
import { isEmpty } from "underscore";

export default function WrappedLegends(props) {
  const {
    hideShowGraphLegendClick,
    isDisabled = [],
    legendalign,
    AdditionalStyles,
    payload,
    data,
    setIsDisabled,
    isStaticIcons,
    staticIcons,
    hideLegendText = false,
    disabledStaticIcons = {},
    defaultVisibleLegends = [],
    legendIconsAlignment = areaGraph?.LEFT,
  } = props;

  useEffect(() => {
    if(setIsDisabled && typeof setIsDisabled == "function"){
      const disabledGraphData = [];
      data?.forEach((element) => {
        if (element?.hide) {
          disabledGraphData.push(element.dataKey);
        }
      });
      setIsDisabled(disabledGraphData);
    }
  }, [data]);
  
  // isDisabled icons
  const isDisabledIcons = (dataKey) => {
    const isDisabledLegendIcons =  isDisabled?.includes(dataKey) && !isEmpty(disabledStaticIcons) ? disabledStaticIcons[dataKey.toLowerCase()] : staticIcons[dataKey.toLowerCase()];

    return isDisabledLegendIcons
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexWrap={"wrap"}
      sx={{
        ...AdditionalStyles,
      }}
    >
      {data?.map((entry) => {
        const { dataKey, value, color, preFix, postFix, icon } = entry;

        const style = {
          marginRight: 15,
          color: isDisabled?.includes(dataKey) ? "#AAA" : "#2c2c2c",
          display: "flex",
          alignItems: "center",
          flexDirection: (defaultVisibleLegends?.includes(dataKey) || legendIconsAlignment === areaGraph?.LEFT) ? "row" : "row-reverse"
        };
        return (
          <span onClick={(e) => entry?.disableClick ? e.preventDefault() : hideShowGraphLegendClick(entry)} style={style}>
            {icon && <Tooltip title={hideLegendText && !defaultVisibleLegends?.includes(dataKey) && dataKey} arrow slotProps={{
              popper: { disablePortal: true }
            }}>
              <img src={isStaticIcons ? isDisabledIcons(dataKey) : icon} alt="icon" style={{ marginRight: "5px", width: "20px", height: "20px", marginLeft: "6px" }} />
            </Tooltip>}
            <Legends
              stroke={hideLegendText && !defaultVisibleLegends?.includes(dataKey) ? (isDisabled?.includes(dataKey) ? "#595959" : entry.stroke) : entry.stroke}
              type={entry?.refPointType || "circleFilled"}
            />
            {(!hideLegendText || defaultVisibleLegends?.includes(dataKey)) && (
               <span
               style={{
                 marginLeft: 10,
                 fontSize: 15.5,
               }}
             >
               {preFix}
               {dataKey}
               {postFix}
             </span>
            )}
            {/* {legendalign == "left" && <br />} */}
          </span>
        );
      })}
    </Box>
  );
}

// import "./styles.css";
import React, { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Legend,
  Area,
  Surface,
  Symbols,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  LabelList,
  PieChart,
  Pie,
  Sector,
} from "recharts";
import PropTypes from "prop-types";
import CircularLegend from "../Legends/circularLegend";
import RactangularLegend from "../Legends/rectangular";
import Star from "../Legends/StarLegends";
import CustomTooltip from "../Tooltip/VerticalTooltip";
import { Grid } from "@mui/material";

export default function PieChartComponent(props) {
  const {
    mainData,
    outerRadius,
    colors,
    dataKey,
    width,
    height,
    legendVerticalAlign,
    legendlayout,
    legendalign,
    legendType,
    legendsProps,
    AdditonalLegendsStyles,
    ...rest
  } = props;

  const [isDisabled, setIsDisabled] = useState([]);
  const [render, setRerender] = useState(false);

  const hideShowGraphLegendClick = (payload) => {
    
    let disabledGraph = [];
    disabledGraph = isDisabled;
    if (disabledGraph.includes(payload)) {
      var index = disabledGraph.indexOf(payload);
      disabledGraph.splice(index, 1);
    } else {
      disabledGraph.push(payload);
    }
    setIsDisabled(disabledGraph);

    render ? setRerender(false) : setRerender(true);
  };
  return (
    <ResponsiveContainer height={height}>
      <PieChart width={width} height={height}>
        <Pie
          data={mainData}
          cx="50%"
          cy="50%"
          outerRadius={outerRadius}
          dataKey={dataKey}
          {...rest}
        >
          {mainData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors?.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
PieChartComponent.propTypes = {
  outerRadius: PropTypes.number,
  dataKey: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  legendVerticalAlign: PropTypes.string,
  legendlayout: PropTypes.string,
  legendalign: PropTypes.string,
  legendType: PropTypes.string,
};
PieChartComponent.defaultProps = {
  height: 400,
  width: "100%",
  legendlayout: "horizontal",
  legendVerticalAlign: "bottom",
  legendalign: "center",
  legendType: "rectangular",
};

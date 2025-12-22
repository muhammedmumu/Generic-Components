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
import CircularLedgeds from "../Legends/circularLegend";
const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#ffff",
          padding: "5px",
          border: "1px solid #cccc",
        }}
      >
        <label>{`${payload[0].name} : ${payload[0].value}`}</label>
      </div>
    );
  }
  return null;
};
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
    ShowLegends,
    LegendIconSize,
    legendProps,
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
        <Legend />
        <Tooltip content={<CustomTooltip />} />

        <Pie
          data={mainData}
          cx="50%"
          cy="50%"
          outerRadius={outerRadius}
          dataKey={dataKey}
          fill="#8884d8"
          {...rest}
        >
          {mainData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry?.stroke} />
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

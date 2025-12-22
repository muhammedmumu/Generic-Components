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
} from "recharts";
import PropTypes from "prop-types";
import CircularLegend from "../Legends/circularLegend";
import Star from "../Legends/StarLegends";
import CustomTooltip from "../Tooltip/VerticalTooltip";

export default function BarGraphColored(props) {
  const {
    data,
    width,
    height,
    legendVerticalAlign,
    legendlayout,
    legendalign,
    maxBarSize,
    stackId,
    legendsProps,
    ShowLegends,
    legendType,
    AdditonalLegendsStyles,
    mainData,
    graphData,
    preLabelTooltipText,
    postLabelTooltipText,
    maxTooltipWidth,
    hideTItle,
    showbarTopTitle,
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

  const renderCustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const radius = 10;
    return (
      <g>
        {/* <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" /> */}
        <text
          x={x + width / 2}
          y={y - radius}
          fill="black"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontSize: 11,
            fontWeight: 500,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          {value}
        </text>
      </g>
    );
  };

  useEffect(() => {}, [render, graphData]);
  return (
    <ResponsiveContainer height={height}>
      <BarChart
        height={height}
        data={mainData}
        margin={{
          top: 25,
          right: 0,
          left: -20,
          bottom: 5,
        }}
        {...rest}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          style={{
            fontSize: 9,
            fontWeight: 700,
          }}
        />
        <YAxis
          axisLine={false}
          style={{
            fontSize: 10,
            fontWeight: 500,
          }}
        />
        <Tooltip
          cursor={{ fill: "#f7f7f7" }}
          content={
            <CustomTooltip
              preLabeltext={preLabelTooltipText}
              PostlabelText={postLabelTooltipText}
              maxTooltipWidth={maxTooltipWidth}
              hideTItle={hideTItle}
            />
          }
        />
        {ShowLegends && (
          <Legend
            iconSize={20}
            verticalAlign={legendVerticalAlign}
            align={legendalign}
            layout={legendlayout}
            onClick={(e) => hideShowGraphLegendClick(e)}
            content={
              legendType == "circular" ? (
                <CircularLegend
                  legendalign={legendalign}
                  hideShowGraphLegendClick={hideShowGraphLegendClick}
                  isDisabled={isDisabled}
                  AdditionalStyles={AdditonalLegendsStyles}
                />
              ) : (
                legendType == "star" && (
                  <Star
                    legendalign={legendalign}
                    hideShowGraphLegendClick={hideShowGraphLegendClick}
                    isDisabled={isDisabled}
                    AdditionalStyles={AdditonalLegendsStyles}
                  />
                )
              )
            }
            {...legendsProps}
          />
        )}
        {graphData?.map((item, index) => {
          return (
            <Bar
              key={index}
              type={item.type}
              dataKey={item.dataKey}
              stroke={item.stroke}
              fill={item.fill}
              stackId={stackId}
              fillOpacity={item.fillOpacity && item.fillOpacity}
              hide={isDisabled.includes(item.dataKey)}
              maxBarSize={maxBarSize}
            >
              {showbarTopTitle && (
                <LabelList
                  dataKey={item.dataKey}
                  content={renderCustomizedLabel}
                />
              )}
            </Bar>
          );
        })}
      </BarChart>
    </ResponsiveContainer>
  );
}

BarGraphColored.propTypes = {};

BarGraphColored.defaultProps = {
  legendVerticalAlign: "middle",
  legendlayout: "vertical",
  legendalign: "left",
  height: 400,
  width: "100%",
  maxBarSize: 15,
  stackId: 1,
  legendType: "rectangular",
  ShowLegends: true,
};

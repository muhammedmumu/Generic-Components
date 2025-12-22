import React, { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Legend,
  Area,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import CustomTooltip from "../Tooltip/Tooltip";
export default function AreaChartComponent(props) {
  const {
    graphData,
    width,
    height,
    legendVerticalAlign,
    legendlayout,
    legendalign,
    legendsProps,
    mainData,
    areaProps,
    ShowLegends,
    legendType,
    AdditonalLegendsStyles,
    preLabelTooltipText,
    postLabelTooltipText,
    yaxisRestprops,
    XAxisStylesProps,
    legendIconSize,
    YAxisStylesProps,
    strokeWidth,
    xAxisDataKey,
    tooltipStyleProps,
    ...rest
  } = props;

  useEffect(() => {}, []);
  return (
    <ResponsiveContainer height={height}>
      <AreaChart width={width} height={height} data={mainData} {...rest}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={xAxisDataKey}
          style={{
            ...XAxisStylesProps,
          }}
        />
        <YAxis
          axisLine={false}
          tickFormatter={(value) => value.toFixed()}
          allowDecimals={false}
          style={{
            ...YAxisStylesProps,
          }}
          {...yaxisRestprops}
        />
        <Tooltip
          content={
            <CustomTooltip
              preLabeltext={preLabelTooltipText}
              PostlabelText={postLabelTooltipText}
              {...tooltipStyleProps}
            />
          }
        />
        <Legend
          iconSize={legendIconSize}
          verticalAlign={legendVerticalAlign}
          align={legendalign}
          layout={legendlayout}
          {...legendsProps}
        />
        )
        {graphData?.map((item, index) => {
          return (
            <Area
              legendType={legendType}
              key={index}
              type={item.type}
              dataKey={item.dataKey}
              stroke={item.stroke}
              fill={item.fill}
              fillOpacity={item.fillOpacity && item.fillOpacity}
              strokeWidth={strokeWidth}
              {...areaProps}
            />
          );
        })}
      </AreaChart>
    </ResponsiveContainer>
  );
}

AreaChartComponent.propTypes = {
  legendVerticalAlign: PropTypes.string,
  legendlayout: PropTypes.string,
  legendalign: PropTypes.string,
  legendType: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  xAxisDataKey: PropTypes.string.isRequired,
};

AreaChartComponent.defaultProps = {
  legendVerticalAlign: "bottom",
  legendlayout: "horizontal",
  legendalign: "center",
  height: 400,
  width: window.innerWidth,
  legendType: "rect",
  XAxisStylesProps: {
    fontSize: 9,
    fontWeight: 700,
  },
  YAxisStylesProps: {
    fontSize: 10,
    fontWeight: 500,
  },
  legendIconSize: 10,
  strokeWidth: 2,
};

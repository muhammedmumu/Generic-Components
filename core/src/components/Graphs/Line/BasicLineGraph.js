import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import PropTypes from "prop-types";

export default function LineChartComponent(props) {
  const {
    data,
    width,
    height,
    legendVerticalAlign,
    legendlayout,
    legendalign,
    AdditonalLegendsStyles,
    ShowLegends,
    legendType,
    verticalCartesianGrid,
    XAxisDataKey,
    YAxisLine,
    tooltipProps,
    LegendIconSize,
    legendProps,
    lineMarkers,
    XAxisStylesProps,
    YAxisStylesProps,

    ...rest
  } = props;

  return (
    <ResponsiveContainer height={height}>
      <LineChart width={width} height={height} data={data?.data} {...rest}>
        <CartesianGrid vertical={verticalCartesianGrid} />
        <XAxis
          dataKey={XAxisDataKey}
          style={{
            ...XAxisStylesProps,
          }}
        />
        <YAxis
          axisLine={YAxisLine}
          style={{
            ...YAxisStylesProps,
          }}
        />
        <Tooltip {...tooltipProps} />
        <Legend
          iconSize={LegendIconSize}
          verticalAlign={legendVerticalAlign}
          align={legendalign}
          layout={legendlayout}
          {...legendProps}
        />
        {data?.graphs?.map((item, index) => {
          return (
            <Line
              legendType={legendType}
              key={index}
              type={item.type}
              dataKey={item.dataKey}
              stroke={item.stroke}
              fill={item.fill}
              dot={lineMarkers}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
}

LineChartComponent.propTypes = {
  legendVerticalAlign: PropTypes.string,
  legendlayout: PropTypes.string,
  legendalign: PropTypes.string,
  legendType: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  YAxisLine: PropTypes.bool,
  XAxisDataKey: PropTypes.string.isRequired,
};

LineChartComponent.defaultProps = {
  legendVerticalAlign: "bottom",
  legendlayout: "horizontal",
  legendalign: "center",
  height: 400,
  width: window.innerWidth,
  legendType: "circular",
  YAxisLine: false,
  LegendIconSize: 10,
  lineMarkers: false,
  XAxisStylesProps: {
    fontSize: 9,
    fontWeight: 700,
  },
  YAxisStylesProps: {
    fontSize: 10,
    fontWeight: 500,
  },
};

// import "./styles.css";
import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import PropTypes from "prop-types";
import CustomTooltip from "../Tooltip/VerticalTooltip";
import { useTheme } from "@mui/styles";

export default function BarChartComponent(props) {
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
    XAxisDataKey,
    legendType,
    AdditonalLegendsStyles,
    mainData,
    graphData,
    preLabelTooltipText,
    legendIconSize,
    postLabelTooltipText,
    maxTooltipWidth,
    XAxisStyleProps,
    YAxisStyleProps,
    hideTItle,
    showbarTopTitle,
    verticalCartesianGrid,
    ...rest
  } = props;
  const theme = useTheme();

  return (
    <ResponsiveContainer height={height}>
      <BarChart height={height} data={mainData} {...rest}>
        <CartesianGrid vertical={verticalCartesianGrid} />
        <XAxis
          dataKey={XAxisDataKey}
          style={{
            ...XAxisStyleProps,
          }}
        />
        <YAxis
          axisLine={false}
          style={{
            ...YAxisStyleProps,
          }}
        />
        <Tooltip
          cursor={{ fill: theme.palette.graphFill.main }}
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
            iconSize={legendIconSize}
            verticalAlign={legendVerticalAlign}
            align={legendalign}
            layout={legendlayout}
            {...legendsProps}
          />
        )}
        {graphData?.map((item, index) => {
          return (
            <Bar
              legendType={legendType}
              key={index}
              type={item.type}
              dataKey={item.dataKey}
              stroke={item.stroke}
              fill={item.fill}
              stackId={stackId}
              fillOpacity={item.fillOpacity && item.fillOpacity}
              maxBarSize={maxBarSize}
            />
          );
        })}
      </BarChart>
    </ResponsiveContainer>
  );
}

BarChartComponent.propTypes = {
  legendVerticalAlign: PropTypes.string,
  legendlayout: PropTypes.string,
  legendalign: PropTypes.string,
  legendType: PropTypes.string,
  height: PropTypes.number,
  ShowLegends: PropTypes.bool,
  width: PropTypes.number,
  maxBarSize: PropTypes.number,
  stackId: PropTypes.number,
  verticalCartesianGrid: PropTypes.bool,
  XAxisDataKey: PropTypes.string.isRequired,
};

BarChartComponent.defaultProps = {
  legendVerticalAlign: "middle",
  legendlayout: "vertical",
  legendalign: "left",
  height: 400,
  width: "100%",
  maxBarSize: 15,
  stackId: 1,
  legendType: "rect",
  verticalCartesianGrid: false,
  ShowLegends: true,
  legendIconSize: 10,
  yAxisLine: false,
  verticalCartesianGrid: false,
  XAxisStyleProps: {
    fontSize: 9,
    fontWeight: 700,
  },
  YAxisStyleProps: {
    fontSize: 10,
    fontWeight: 500,
  },
  tooltipProps: {
    cursor: { fill: "#f7f7f7" },
  },
};

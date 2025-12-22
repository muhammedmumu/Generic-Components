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
  LabelList,
} from "recharts";
import PropTypes from "prop-types";
import CustomTooltip from "../Tooltip/VerticalTooltip";
import useGraphHook from "../hooks/useGraph";
import { useTheme } from "@mui/styles";
import TooltipComp from "../Tooltip/Tooltip";
import CircularLedgeds from "../Legends/circularLegend";
import { forwardRef } from "react";

const  BarChartComponent = forwardRef((props, ref) => {
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
    tooltipProps,
    maxTooltipWidth,
    hideTItle,
    barGraphProps,
    showbarTopTitle,
    verticalCartesianGrid,
    XAxisStyleProps,
    YAxisStyleProps,
    legendIconSize,
    YaxisRestprops,
    yAxisLine,
    XAxisDataKey,
    xAxisProps,
    yAxisProps,
    ...rest
  } = props;
  const { isDisabled, hideShowGraphLegendClick } = useGraphHook();
  const theme = useTheme();
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

  return (
    <ResponsiveContainer height={height}>
      <BarChart height={height} data={mainData} ref={ref} {...rest}>
        <CartesianGrid vertical={verticalCartesianGrid} />
        <XAxis
          dataKey={XAxisDataKey}
          style={{
            fontSize: 15,
            fontFamily: "poppins",
          }}
          {...xAxisProps}
        />
        <YAxis
          axisLine={yAxisLine}
          style={{
            fontSize: 15,
            fontFamily: "poppins",
          }}
          {...yAxisProps}
        />
        {/* <Tooltip
          cursor={{ fill: theme.palette.graphFill.main }}
          content={
            <CustomTooltip
              preLabeltext={preLabelTooltipText}
              PostlabelText={postLabelTooltipText}
              maxTooltipWidth={maxTooltipWidth}
              hideTItle={hideTItle}
            />
          }
          {...tooltipProps}
        /> */}
        <Tooltip content={<TooltipComp data={mainData} />} {...tooltipProps} />
        {ShowLegends && (
          <Legend
            iconSize={legendIconSize}
            verticalAlign={legendVerticalAlign}
            align={legendalign}
            layout={legendlayout}
            content={
              <CircularLedgeds
                hideShowGraphLegendClick={hideShowGraphLegendClick}
                isDisabled={isDisabled}
                data={graphData}
              />
            }
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
              hide={isDisabled.includes(item.dataKey)}
              maxBarSize={maxBarSize}
              {...barGraphProps}
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
})

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
  XAxisStyleProps: PropTypes.object,
  YAxisStyleProps: PropTypes.object,
  legendIconSize: PropTypes.string,
  showbarTopTitle: PropTypes.bool,
};

BarChartComponent.defaultProps = {
  legendVerticalAlign: "middle",
  legendlayout: "vertical",
  legendalign: "left",
  height: 400,
  width: "100%",
  maxBarSize: 15,
  stackId: 1,
  legendType: "rectangular",
  ShowLegends: true,
  verticalCartesianGrid: false,
  yAxisLine: false,
  legendIconSize: 10,
  showbarTopTitle: false,
  XAxisStyleProps: {
    fontSize: 9,
    fontWeight: 700,
  },
  YAxisStyleProps: {
    fontSize: 10,
    fontWeight: 500,
  },
};

export default BarChartComponent;
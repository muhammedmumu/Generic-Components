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
  ReferenceLine,
  Label,
} from "recharts";
import PropTypes from "prop-types";
import useGraphHook from "../hooks/useGraph";
import CircularLedgeds from "../Legends/circularLegend";
import TooltipComp from "../Tooltip/Tooltip";
import CustomizedDot from "../customReferenceDot/index";
import { forwardRef } from "react";
import YAxisPositiveValueHook from "../hooks/YAxisPositiveValueHook"

const LineChartComponent = forwardRef((props, ref) => {
  const {
    data,
    width,
    height,
    legendVerticalAlign,
    legendlayout,
    legendalign,
    AdditonalLegendsStyles,
    legendsProps,
    ShowLegends,
    legendType,
    verticalCartesianGrid,
    XAxisDataKey,
    YAxisLine,
    tooltipProps,
    legendProps,
    LegendIconSize,
    strokeWidth,
    lineMarkers,
    XAxisStylesProps,
    YAxisStylesProps,
    lineProps,
    yAxisProps,
    showTooltip,
    postYAxisLabel,
    externalDisableState,
    externalDisable,
    TopExternalLegends,
    BottomExternalLegends,
    YAxisPositiveValue,
    title,
    responsiveContainerStyles,
    legendWrapperStyles,
    ...rest
  } = props;
  const { isDisabled, hideShowGraphLegendClick, setIsDisabled } =
    useGraphHook();
  const { formatterYAxisPositiveValue } = YAxisPositiveValueHook()

  const formatter = (value) => {
    if (postYAxisLabel) {
      return `${value}${postYAxisLabel}`;
    }
    return `${value}`;
  };

  return (
    <>
      {TopExternalLegends && TopExternalLegends}
      <ResponsiveContainer height={height} {...responsiveContainerStyles}>
        <LineChart
          width={width}
          height={height}
          data={data?.data}
          ref={ref}
          {...rest}
        >
          <CartesianGrid vertical={verticalCartesianGrid} />
          {title && title}
          <XAxis
            dataKey={XAxisDataKey}
            style={{
              ...XAxisStylesProps
            }}
          />
          <YAxis
            axisLine={false}
            //tickFormatter={formatter}
            tickFormatter={
              YAxisPositiveValue ? (value) => formatterYAxisPositiveValue(value, postYAxisLabel) : formatter
            }
            domain={[
              (dataMin) => {
                if (isFinite(dataMin)) {
                  const minValue = parseFloat(dataMin);
                  return Math.floor(minValue);
                } else {
                  return 0;
                }
              },
              (dataMax) => {
                if (isFinite(dataMax)) {
                  const maxValue = parseFloat(dataMax);
                  return Math.ceil(maxValue);
                } else {
                  return 10;
                }
              },
            ]}
            // allowDataOverflow={true}
            style={{
              ...YAxisStylesProps
            }}
            {...yAxisProps}
          />
          {showTooltip && (
            <Tooltip
              content={<TooltipComp data={data?.data} {...tooltipProps} />}
              wrapperStyle={{
                width: "calc(100% - 75px)",
              }}
            />
          )}

          {ShowLegends && (
            <Legend
              iconSize={LegendIconSize}
              verticalAlign={legendVerticalAlign}
              align={legendalign}
              layout={legendlayout}
              wrapperStyle={legendWrapperStyles}
              content={
                <CircularLedgeds
                  hideShowGraphLegendClick={hideShowGraphLegendClick}
                  isDisabled={isDisabled}
                  data={data?.graphs}
                  setIsDisabled={setIsDisabled}
                />
              }
              {...legendProps}
            />
          )}
          {data?.graphs?.map((item, index) => {
            return (
              <Line
                legendType={legendType}
                key={index}
                type={item.type}
                strokeWidth={item.strokeWidth || strokeWidth}
                dataKey={item.dataKey}
                stroke={item.stroke}
                fill={item.fill}
                hide={
                  externalDisable
                    ? externalDisableState.includes(item.dataKey)
                    : isDisabled.includes(item.dataKey)
                }
                dot={
                  <CustomizedDot
                    stroke={item.stroke}
                    type={item?.refPointType || "circle"}
                  />
                }
                strokeDasharray={item?.strokeDasharray}
                {...lineProps}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
      {BottomExternalLegends && BottomExternalLegends}
    </>
  );
});

LineChartComponent.propTypes = {
  legendVerticalAlign: PropTypes.string,
  legendlayout: PropTypes.string,
  legendalign: PropTypes.string,
  legendType: PropTypes.string,
  height: PropTypes.number,
  ShowLegends: PropTypes.bool,
  width: PropTypes.number,
  YAxisLine: PropTypes.bool,
  strokeWidth: PropTypes.string,
  XAxisDataKey: PropTypes.string.isRequired,
  showTooltip: PropTypes.bool,
  externalDisableState: PropTypes.array,
  externalDisable: PropTypes.bool,
};

LineChartComponent.defaultProps = {
  legendVerticalAlign: "bottom",
  preYAxisLabel: null,
  postYAxisLabel: null,
  legendlayout: "horizontal",
  legendalign: "center",
  height: 400,
  width: window.innerWidth,
  legendType: "circular",
  ShowLegends: true,
  YAxisLine: false,
  LegendIconSize: 20,
  lineMarkers: true,
  verticalCartesianGrid: false,
  LegendIconSize: 10,
  strokeWidth: 2,
  XAxisStylesProps: {
    fontSize: 15,
    fontWeight: 400,
    fontFamily: "Poppins",
  },
  YAxisStylesProps: {
    fontSize: 15,
    fontWeight: 400,
    fontFamily: "Poppins",
  },
  showTooltip: true,
  externalDisable: false,
};

export default LineChartComponent;

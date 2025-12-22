// import "./styles.css";
import React, { forwardRef } from "react";
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
  ComposedChart,
  Scatter,
  ReferenceLine,
  Text,
  Label,
  Area,
  Line,
} from "recharts";
import PropTypes from "prop-types";
import CustomTooltip from "../Tooltip/VerticalTooltip";
import useGraphHook from "../hooks/useGraph";
import { useTheme } from "@mui/styles";
import TooltipComp from "../Tooltip/Tooltip";
import CircularLedgeds from "../Legends/circularLegend";
import YAxisPositiveValueHook from "../hooks/YAxisPositiveValueHook";
import CustomizedDot from "../customReferenceDot/index";
import { RenderHorizontalBarLabel } from "./HorizontalBarLabel";

const ComposedChartComponent = forwardRef((props, ref) => {
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
    YAxisDataKey,
    xAxisProps,
    yAxisProps,
    postYAxisLabel,
    postXAxisLabel,
    ScatterGraph,
    externalDisableState,
    externalDisable,
    TopExternalLegends,
    BottomExternalLegends,
    showReferenceLine,
    refrenceLineColor,
    showToolTip,
    showLegendsToolTip,
    yRefLineCoordinate,
    xRefLineCoordinate,
    customRefLabel,
    yAxisLabelRefValue,
    labelRefPosition,
    xAxisPositiveValue,
    yAxisPositiveValue,
    yAxisFontSize,
    xAxisFontSize,
    xAxisFontWeight,
    backgroundGraphColor,
    isHorizontal,
    showTopXaxis,
    onBarClick,
    onScatterGraphClick,
    showBackgroundColor,
    title,
    positiveTitle,
    negativeTitle,
    dxPositionValue,
    dyPositionValue,
    barGraph,
    lineData,
    lineProps,
    isLineGraph,
    showCombinedBarGraph,
    yAxisRightProps,
    responsiveContainerStyles,
    margins,
    legendWrapperStyles,
    showPointeronBar,
    isHorizontalChart = false,
    customHorizontalBarLabelStyles,
    postLabelTextHorizontalBar,
    ...rest
  } = props;
  const { isDisabled, hideShowGraphLegendClick } = useGraphHook();
  const { formatterYAxisPositiveValue, formatterXAxisPositiveValue } =
    YAxisPositiveValueHook();
  

  const theme = useTheme();
  const RenderCustomizedLabel = (props) => {
    const { x, y, width, height, value, customBarLabelColor } = props;
    const radius = 10;
    return (
      <g>
        {/* <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" /> */}
        <text
          x={x + width / 2}
          y={y - radius}
          fill={customBarLabelColor ? customBarLabelColor : "black"}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontSize: 11,
            fontWeight: 500,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          {value !== 0 ? value : ""}
        </text>
      </g>
    );
  };

  const CustomizedLabel = (props) => {
    // eslint-disable-next-line react/prop-types
    const { x, y, payload } = props;

    return (
      <Text x={x} y={y + 3} fill="#002960" fontSize={11} textAnchor="left">
        {payload.value}
      </Text>
    );
  };

  const formatter = (value) => {
    if (postYAxisLabel) {
      return `${value}${postYAxisLabel}`;
    }
    return `${value}`;
  };

  const formatterXAxis = (value) => {
    if (postXAxisLabel) {
      return `${value}${postXAxisLabel}`;
    }
    return `${value}`;
  };

  return (
    <>
      {TopExternalLegends && TopExternalLegends}
      <ResponsiveContainer {...responsiveContainerStyles} height={height}>
        <ComposedChart
          height={height}
          data={mainData}
          ref={ref}
          {...rest}
          margin={margins?{...margins}:{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid
            vertical={verticalCartesianGrid}
            horizontal={isHorizontal}
            fill={backgroundGraphColor}
          />

          {title && title}
          {positiveTitle && positiveTitle}
          {negativeTitle && negativeTitle}

          <XAxis
            xAxisId={0}
            style={{
              fontSize: xAxisFontSize,
              fontFamily: "poppins",
              fontWeight: xAxisFontWeight,
            }}
            orientation={"bottom"}
            dataKey={XAxisDataKey}
            tickFormatter={
              xAxisPositiveValue
                ? (value) => formatterXAxisPositiveValue(value, postXAxisLabel)
                : formatterXAxis
            }
            {...xAxisProps}
          />
          {showTopXaxis && (
            <XAxis
              xAxisId={1}
              style={{
                fontSize: xAxisFontSize,
                fontFamily: "poppins",
                fontWeight: xAxisFontWeight,
              }}
              orientation={"top"}
              dataKey={XAxisDataKey}
              tickFormatter={
                xAxisPositiveValue
                  ? (value) =>
                      formatterXAxisPositiveValue(value, postXAxisLabel)
                  : formatterXAxis
              }
              {...xAxisProps}
            />
          )}

          <YAxis
            axisLine={yAxisLine}
            tickFormatter={
              yAxisPositiveValue
                ? (value) => formatterYAxisPositiveValue(value, postYAxisLabel)
                : formatter
            }
            dataKey={YAxisDataKey}
            style={{
              fontSize: yAxisFontSize,
              fontFamily: "poppins",
            }}
            {...yAxisProps}
          />

          {showCombinedBarGraph && (
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={yAxisLine}
              tickFormatter={
                yAxisPositiveValue
                  ? (value) =>
                      formatterYAxisPositiveValue(value, postYAxisLabel)
                  : formatter
              }
              dataKey={YAxisDataKey}
              style={{
                fontSize: yAxisFontSize,
                fontFamily: "poppins",
              }}
              {...yAxisRightProps}
            />
          )}

          {showToolTip && (
            <Tooltip
              content={
                <TooltipComp
                  data={mainData}
                  wrapperStyle={{
                    width: "calc(100% - 70px)",
                  }}
                />
              }
              {...tooltipProps}
            />
          )}

          {ShowLegends && (
            <Legend
              iconSize={legendIconSize}
              verticalAlign={legendVerticalAlign}
              align={legendalign}
              layout={legendlayout}
              wrapperStyle={legendWrapperStyles}
              content={
                <CircularLedgeds
                  hideShowGraphLegendClick={hideShowGraphLegendClick}
                  isDisabled={isDisabled}
                  data={!isLineGraph ? graphData : lineData}
                />
              }
              {...legendsProps}
            />
          )}

          {showReferenceLine &&
            (customRefLabel ? (
              <ReferenceLine
                y={yRefLineCoordinate}
                x={xRefLineCoordinate}
                stroke={refrenceLineColor}
              >
                <Label
                  value={yAxisLabelRefValue}
                  position={labelRefPosition}
                  dy={dyPositionValue}
                  dx={dxPositionValue}
                ></Label>
              </ReferenceLine>
            ) : (
              <ReferenceLine
                y={yRefLineCoordinate}
                x={xRefLineCoordinate}
                stroke={refrenceLineColor}
              />
            ))}

          {graphData?.map((item, index) => {
            return (
              <>
                {showCombinedBarGraph && (
                  <Bar
                    legendType={legendType}
                    key={index}
                    type={item.type}
                    dataKey={item.dataKey}
                    stroke={item.stroke}
                    fill={item.fill}
                    formatter={item?.formatter && item?.formatter}
                    //stackId={stackId ? stackId : null}
                    fillOpacity={item.fillOpacity && item.fillOpacity}
                    hide={
                      externalDisable
                        ? externalDisableState?.includes(item.dataKey)
                        : isDisabled?.includes(item.dataKey)
                    }
                    maxBarSize={maxBarSize}
                    onClick={(data) => {
                      onBarClick &&
                        onBarClick({ barData: data, payloadData: item });
                    }}
                    cursor={showPointeronBar ? showPointeronBar(item) && "pointer" : onBarClick && "pointer"}
                    yAxisId={item?.yAxisId}
                    {...barGraphProps}
                  >
                    {showbarTopTitle && (
                      <LabelList
                        dataKey={item.customBarLabelDatakey ? item?.customBarLabelDatakey : item?.dataKey}
                        content={isHorizontalChart ? <RenderHorizontalBarLabel postLabelTextHorizontalBar={postLabelTextHorizontalBar} {...item} /> : <RenderCustomizedLabel {...item}/>}
                      />
                    )}
                  </Bar>
                )}
              </>
            );
          })}

          {/* {showLegendsToolTip && (
            <Tooltip
              content={
                <TooltipComp data={mainData} />
              }
              {...tooltipProps}
            />
          )} */}
          {showBackgroundColor && (
            <>
              <Area dataKey={"postive_area"} fill="#7bb42d33" height={1050} />
              <Area dataKey={"negative_area"} fill="#cf5a5a33" />
            </>
          )}

          {ScatterGraph &&
            ScatterGraph.map((item) => {
              return (
                <Scatter
                  dataKey={item?.dataKey}
                  key={item?.dataKey}
                  fill={item.fill}
                  onClick={() => {
                    onScatterGraphClick && onScatterGraphClick(item);
                  }}
                  hide={
                    externalDisable
                      ? externalDisableState.includes(item.dataKey)
                      : isDisabled.includes(item.dataKey)
                  }
                />
              );
            })}

          {lineData && lineData?.map((item, index) => {
            return (
              <>
                <Line
                  legendType={legendType}
                  key={item.dataKey}
                  type={item.type}
                  strokeWidth={item.strokeWidth}
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
                      type={item?.refPointType || "circleFilled"}
                    />
                  }
                  yAxisId={item.yAxisId}
                  strokeDasharray={item?.strokeDasharray}
                  {...lineProps}
                />
              </>
            );
          })}
        </ComposedChart>
      </ResponsiveContainer>
      {BottomExternalLegends && BottomExternalLegends}
    </>
  );
});

ComposedChartComponent.propTypes = {
  legendVerticalAlign: PropTypes.string,
  legendlayout: PropTypes.string,
  legendalign: PropTypes.string,
  legendType: PropTypes.string,
  showCombinedBarGraph: PropTypes.bool,
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
  isHorizontal: PropTypes.bool,
  minWidth:PropTypes.string
};

ComposedChartComponent.defaultProps = {
  legendVerticalAlign: "middle",
  legendlayout: "vertical",
  legendalign: "left",
  height: 400,
  width: "100%",
  maxBarSize: 15,
  stackId: 1,
  legendType: "rectangular",
  ShowLegends: true,
  showCombinedBarGraph: true,
  verticalCartesianGrid: true,
  HorizontalCartesianGrid: false,
  showToolTip: true,
  showLegendsToolTip: false,
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
  xAxisPositiveValue: false,
  yAxisFontSize: 15,
  xAxisFontSize: 15,
  xAxisFontWeight: "",
  backgroundGraphColor: "",
  isHorizontal: false,
  showTopXaxis: false,
  showBackgroundColor: false,
};

export default ComposedChartComponent;

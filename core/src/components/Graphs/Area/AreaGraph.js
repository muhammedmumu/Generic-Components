import React from "react";
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
import useGraphHook from "../hooks/useGraph";
import GraphGradient from "./GraphGradient";
import { isEmpty } from "underscore";
import CircularLedgeds from "../Legends/circularLegend";

export default function AreaChartComponent(props) {
  const {
    width,
    height,
    mainData,
    areaProps,
    graphData,
    legendType,
    ShowLegends,
    legendalign,
    strokeWidth,
    legendlayout,
    legendsProps,
    xAxisDataKey,
    legendIconSize,
    yaxisRestprops,
    XaxisRestprops,
    XAxisStylesProps,
    YAxisStylesProps,
    tooltipStyleProps,
    legendVerticalAlign,
    preLabelTooltipText,
    postLabelTooltipText,
    AdditonalLegendsStyles,
    hideDecimal,
    showTooltip,
    cartesianGridRestProps,
    gradientData,
    ShowCustomLegends,
    verticalCatesianGrid,
    isHorizontal,
    isStaticIcons,
    staticIcons,
    hideLegendText,
    disabledStaticIcons,
    defaultVisibleLegends,
    legendIconsAlignment,
    ...rest
  } = props;

  const { isDisabled, hideShowGraphLegendClick, setIsDisabled } =
    useGraphHook();
  return (
    <ResponsiveContainer height={height}>
      <AreaChart width={width} height={height} data={mainData} {...rest}>
        <CartesianGrid vertical={verticalCatesianGrid} horizontal={isHorizontal} {...cartesianGridRestProps} />
        {gradientData !== undefined && !isEmpty(gradientData) && (
          <defs>
            <GraphGradient
              stopColor={gradientData?.stroke}
              datakey={gradientData?.key}
            />
          </defs>
        )}
        <XAxis
          dataKey={xAxisDataKey}
          style={{
            ...XAxisStylesProps,
          }}
          {...XaxisRestprops}
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
        {showTooltip && (
          <Tooltip
            content={
              <CustomTooltip
                preLabeltext={preLabelTooltipText}
                PostlabelText={postLabelTooltipText}
                hideDecimal={hideDecimal}
                {...tooltipStyleProps}
              />
            }
            wrapperStyle={{
              width: "calc(100% - 75px)",
            }}
          />
        )}
        {ShowLegends && (
          <Legend
            iconSize={legendIconSize}
            verticalAlign={legendVerticalAlign}
            align={legendalign}
            layout={legendlayout}
            onClick={hideShowGraphLegendClick}
            wrapperStyle={{ fontSize: 15.5 }}
            {...(ShowCustomLegends && {
              content: (
                <CircularLedgeds
                  hideShowGraphLegendClick={hideShowGraphLegendClick}
                  isDisabled={isDisabled}
                  data={graphData}
                  setIsDisabled={setIsDisabled}
                  isStaticIcons={isStaticIcons}
                  staticIcons={staticIcons}
                  AdditionalStyles={AdditonalLegendsStyles}
                  hideLegendText={hideLegendText}
                  defaultVisibleLegends={defaultVisibleLegends}
                  disabledStaticIcons={disabledStaticIcons}
                  legendIconsAlignment={legendIconsAlignment}
                />
              ),
            })}
            {...legendsProps}
          />
        )}

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
              hide={isDisabled.includes(item.dataKey)}
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
  ShowLegends: PropTypes.bool,
  ShowCustomLegends: PropTypes.bool,
  width: PropTypes.number,
  XAxisStylesProps: PropTypes.object,
  YaxisRestprops: PropTypes.object,
  strokeWidth: PropTypes.string,
  legendIconSize: PropTypes.string,
  xAxisDataKey: PropTypes.string.isRequired,
  showTooltip: PropTypes.bool,
  cartesianGridRestProps: PropTypes.object,
  verticalCatesianGrid: PropTypes.bool,
  isHorizontal: PropTypes.bool
};

AreaChartComponent.defaultProps = {
  legendVerticalAlign: "bottom",
  legendlayout: "horizontal",
  legendalign: "center",
  height: 400,
  width: window.innerWidth,
  legendType: "circle",
  ShowLegends: true,
  showTooltip: true,
  ShowCustomLegends: false,
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
  hideDecimal: false,
  verticalCatesianGrid: false,
  isHorizontal: false
};

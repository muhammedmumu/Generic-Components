import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import { PropTypes } from "prop-types";

const WordCloud = React.forwardRef((props, ref) => {
  const {
    data,
    onClick,
    maxFontSize,
    minFontSize,
    randomness,
    rotationThreshold,
    fontFamily,
    containerWidth,
    containerHeight,
    restContainerStyles,
    ...rest
  } = props;

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    chart.logo.dispose();
    chart.fontFamily = "poppins";
    var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = randomness;
    series.rotationThreshold = rotationThreshold;
    series.maxFontSize = maxFontSize;
    series.minFontSize = minFontSize;
    series.labels.template.propertyFields.fill = "color";
    series.labels.template.fontFamily = fontFamily;
    series.labels.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    series.labels.template.events.on("hit", function (value) {
      onClick(value.target._dataItem._dataContext);
    });
    chart.resizable = "false";
    series.labels.template.setStyles({
      cursor: "pointer",
    });
    series.data = [...data];
    series.dataFields.word = "text";
    series.dataFields.value = "value";
    chart.current = x;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div
      id="chartdiv"
      ref={ref}
      {...rest}
      style={{
        width: containerWidth,
        height: containerHeight,
        ...restContainerStyles,
      }}
    ></div>
  );
})

WordCloud.propTypes = {
  minFontSize: PropTypes.number,
  maxFontSize: PropTypes.number,
  data: PropTypes.array.isRequired,
  randomness: PropTypes.number,
  rotationThreshold: PropTypes.number,
  fontFamily: PropTypes.string,
  randomSeed: PropTypes.bool,
  containerWidth: PropTypes.string,
  containerHeight: PropTypes.string,
};

WordCloud.defaultProps = {
  maxFontSize: 75,
  minFontSize: 10,
  randomness: 0.5,
  rotationThreshold: 0,
  fontFamily: "poppins",
  data: [],
  containerWidth: "100%",
  containerHeight: "800px",
};

export default WordCloud;
import React from "react";
import { TagCloud } from "react-tagcloud";
import { PropTypes } from "prop-types";
import WordCloud from "react-d3-cloud";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

export default function WordCloudComp(props) {
  const {
    data,
    minSize,
    maxSize,
    onClick,
    shuffle,
    colorOptions,
    disableRandomColor,
    randomSeed,
    rotate,
    ...rest
  } = props;

  return (
    // <WordCloud
    //   data={data}
    //   font="Poppins"
    //   fontSize={(word) => Math.log2(word.value) * 5}
    //   spiral="archimedean"
    //   rotate={rotate}
    //   fill={(word) => word.color}
    //   onWordClick={(event, d) => {
    //     onClick(d);
    //   }}
    //   {...rest}
    // />
    <TagCloud
      minSize={minSize}
      maxSize={maxSize}
      tags={data}
      shuffle={false}
      onClick={(tag) => onClick(tag)}
      colorOptions={colorOptions}
      disableRandomColor={disableRandomColor}
      randomSeed={randomSeed}
      {...rest}
    />
  );
}

WordCloudComp.propTypes = {
  minSize: PropTypes.number,
  maxSize: PropTypes.number,
  tags: PropTypes.array.isRequired,
  shuffle: PropTypes.bool,
  colorOptions: PropTypes.object,
  disableRandomColor: PropTypes.bool,
  randomSeed: PropTypes.bool,
};

WordCloudComp.defaultProps = {
  shuffle: false,
  rotate: 0,
};

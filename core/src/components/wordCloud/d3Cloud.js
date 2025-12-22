import React, { useCallback } from "react";
import { PropTypes } from "prop-types";
import WordCloud from "react-d3-cloud";

export default function D3WordCloudComp(props) {
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
  const onWordClick = useCallback((e, d) => {
    onClick(d);
  }, []);
  var max = Math.max(...data.map((item) => item.value));
  var min = Math.min(...data.map((item) => item.value));

  function getFont(word) {
    const minFont = 7  ;
    const v = Math.log2(word.value - min) + minFont;
    const final = v > 0 ? v * 1.1 : minFont;
    return Math.floor(final);
  }

  return (
    <WordCloud
      data={data}
      height={300}
      font="Poppins"
      fontSize={getFont}
      shape="elliptic"
      fill={(word) => word.color}
      rotate={0}
      onWordClick={onWordClick}
      {...rest}
    />
  );
}

D3WordCloudComp.propTypes = {
  minSize: PropTypes.number,
  maxSize: PropTypes.number,
  tags: PropTypes.array.isRequired,
  shuffle: PropTypes.bool,
  colorOptions: PropTypes.object,
  disableRandomColor: PropTypes.bool,
  randomSeed: PropTypes.bool,
};

D3WordCloudComp.defaultProps = {
  shuffle: false,
  rotate: 0,
};

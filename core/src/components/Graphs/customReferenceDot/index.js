import React from "react";

export default function Index(props) {
  const { cx, cy, stroke, type, value } = props;
  const validate = value && value !== "N/A";
  return (
    <>
      {type == "circle" && validate && (
        <svg x={cx - 4} y={cy - 4} width={8} height={8} fill="white">
          <g transform="translate(4 4)">
            <circle r={4} fill={stroke} />
            <circle r={3} fill="white" />
          </g>
        </svg>
      )}
      {type == "circleFilled" && validate && (
        <svg x={cx - 4} y={cy - 4} width={8} height={8} fill="white">
          <g transform="translate(4 4)">
            <circle r={4} fill={stroke} />
          </g>
        </svg>
      )}
      {type == "square" && validate && (
        <svg x={cx - 4} y={cy - 4} width={8} height={8} fill="white">
          <g transform="translate(4 4)">
            <circle r={10} fill={stroke} />
            {/* <circle r={6} fill="white" /> */}
          </g>
        </svg>
      )}
      {type == "squareFilled" && validate && (
        <svg x={cx - 4} y={cy - 4} width={8} height={8} fill="white">
          <g transform="translate(4 4)">
            <circle r={10} fill={stroke} />
          </g>
        </svg>
      )}
    </>
  );
}

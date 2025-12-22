import React from "react";

export default function Index(props) {
  const { cx, cy, stroke, type, value } = props;
  const validate = true;
  return (
    <>
      {type == "circle" && validate && (
        <svg width={8} height={8} fill={"red"}>
          <g transform="translate(4 4)">
            <circle r={4} fill={stroke} />
            <circle r={3} fill="white" />
          </g>
        </svg>
      )}
      {type == "circleFilled" && validate && (
        <svg width={8} height={8} fill={stroke}>
          <g transform="translate(4 4)">
            <circle r={4} fill={stroke} />
          </g>
        </svg>
      )}
      {type == "square" && validate && (
        <svg width={8} height={8} fill={stroke}>
          <g transform="translate(4 4)">
            <circle r={10} fill={stroke} />
            {/* <circle r={6} fill="white" /> */}
          </g>
        </svg>
      )}
      {type == "squareFilled" && validate && (
        <svg width={8} height={8} fill={stroke}>
          <g transform="translate(4 4)">
            <circle r={10} fill={stroke} />
          </g>
        </svg>
      )}
      {type === "line" && validate && (
        <svg width={16} height={2}>
          <line x1={0} y1={1} x2={16} y2={1} stroke={stroke} strokeWidth={2} />
        </svg>
      )}
      {type === "dashed" && validate && (
        <svg width={16} height={2}>
          <line
            x1={0}
            y1={1}
            x2={16}
            y2={1}
            stroke={stroke}
            strokeWidth={2}
            strokeDasharray="4 2"
          />
        </svg>
      )}
      {type === "rectangleFilled" && validate && (
        <svg width="50" height="25" fill={stroke}>
         <rect width="50" height="25" fill={stroke}/> 
      </svg>
      )}
    </>
  );
}

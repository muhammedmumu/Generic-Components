export const RenderHorizontalBarLabel = (props) => {
    const { x, y, width, height, value, customBarLabelColor, customHorizontalBarLabelStyles, postLabelTextHorizontalBar } = props;
  
    return (
      <g>
        <text
          x={x + width + 5} 
          y={y + height / 2}
          fill={customBarLabelColor || "black"}
          textAnchor="start"
          dominantBaseline="middle"
          style={{
            fontSize: 12,
            fontWeight: 500,
            ...customHorizontalBarLabelStyles
          }}
        >
         {typeof value === "number" && value !== 0 ? `${value}${postLabelTextHorizontalBar}` : ""}
        </text>
      </g>
    );
  };
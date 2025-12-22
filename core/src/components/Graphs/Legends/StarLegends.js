import React from "react";
import { Surface, Symbols } from "recharts";

export default function WrappedLegends(props) {
  const {
    payload,
    hideShowGraphLegendClick,
    isDisabled,
    legendalign,
    AdditionalStyles,
  } = props;
  return (
    <div
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        wordBreak: "break-word",
        marginTop: "7px",
        marginBottom: "20px",
        fontSize: "12px",
        fontWeight: 400,
        paddingLeft: "20px",
        ...AdditionalStyles,
      }}
    >
      <div
        style={
          {
            // width: "80%",
          }
        }
      >
        {payload?.map((entry) => {
          const { dataKey, color } = entry;
          const active = ""; //_.includes(this.state.disabled, dataKey);
          const style = {
            marginRight: 10,
            color: isDisabled?.includes(dataKey) ? "#AAA" : "#000",
            width: "110%",
            // whiteSpace: "set",
            wordBreak: "break-word",
          };

          return (
            <span
              // onClick={() => hideShowGraphLegendClick(dataKey)}
              style={style}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  textTransform: "capitalize",
                  marginRight: 6,
                }}
              >
                {dataKey}
              </span>

              <Surface width={10} height={11} viewBox="0 0 10 10">
                <Symbols cx={5} cy={6} type="star" size={60} fill={color} />
                {isDisabled?.includes(dataKey) && (
                  <Symbols cx={5} cy={5} type="star" size={25} fill={"#FFF"} />
                )}
              </Surface>

              {legendalign == "left" || (legendalign == "right" && <br />)}
            </span>
          );
        })}
      </div>
    </div>
  );
}

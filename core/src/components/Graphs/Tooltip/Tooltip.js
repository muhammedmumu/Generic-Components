import React from "react";
import { Grid, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import LowerCaseToTitle from "@turner/einstein/src/hooks/LowerCaseToTitleCase";

export default function Tooltip({
  active,
  payload,
  label,
  preLabeltext,
  PostlabelText,
  data,
  hideName,
  hideValue,
  hideDecimal,
  hideNegativeSign,
  width,
  labelColor,
  hasTooltipLabel = true
}) {
  const { HandleLowerCaseToTitleCase } = LowerCaseToTitle();

  // get tooltip labels
  const getTooltipLabels = (item) => {
    switch (true) {
      case hideValue:
        return "";

      case item?.dataKey === "count":
        return hideNegativeSign
          ? Math.abs(item?.payload?.count_of_responses).toLocaleString()
          : item?.payload?.count_of_responses.toLocaleString();

      case typeof item.value === "number" && !hideDecimal:
        return parseFloat(
          hideNegativeSign ? Math.abs(item.value) : item.value
        ).toFixed(2);

      default:
        return hideNegativeSign
          ? Math.abs(item.value).toLocaleString()
          : item.value.toLocaleString();
    }
  };

  if (active) {
    return (
      <Grid
        container
        direction={"column"}
        xs={12}
        sx={{
          backgroundColor: "white",
          border: "1px solid",
          overflow: "scroll",
          paddingTop: 1,
          pl: 1,
          // maxWidth: "calc(100% - 70px)",
          width: width
        }}
      >
        <Grid item>{hasTooltipLabel ? label : ""}</Grid>
        <Divider />
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          sx={{ mb: 1, mt: 1 }}
          alignItems="center"
        >
          {payload?.map((item) => {
            if (item.name == "positive_area" || item.name == "negative_area")
              return;
            return (
              <Chip
                label={`${preLabeltext ? preLabeltext : ""} ${
                  hideName ? "" : `${HandleLowerCaseToTitleCase(item?.formatter ? item?.formatter : item.name)} :`
                } ${getTooltipLabels(item)} ${PostlabelText ? PostlabelText : " "}`}
                sx={[{
                  background: item.fill,
                  mb: "8px !important",
                  textTransform: "capitalize"
                }, labelColor ? {
                  color: labelColor[item?.dataKey]
                } : {
                  color: "#fff"
                }]}
              />
            );
          })}
        </Stack>
      </Grid>
    );
  }
  return null;
}

import React, { memo } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Checkbox, Typography } from "@mui/material";

const DefaultFirstColumn = memo(
  ({ row, isSelected, onToggle, badges, textColor, checkboxColor }) => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          width: "100%",
        }}
      >
        {/* Row Selection Checkbox */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            checked={!!isSelected}
            onChange={() => onToggle(row.id)}
            sx={{ color: checkboxColor, padding: "4px" }}
            disableRipple
            disableFocusRipple
            disableTouchRipple
          />
        </Box>

        {/* Badges and Text */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {badges && badges.length > 0 && (
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              flexWrap="wrap"
              mb={0.5}
            >
              {badges.map((badge, idx) => (
                <Box
                  key={idx}
                  sx={{
                    px: 0.75,
                    py: 0.25,
                    borderRadius: "4px",
                    backgroundColor: badge.backgroundColor,
                    color: badge.color || "#fff",
                    fontSize: "10px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  {badge.label}
                </Box>
              ))}
            </Box>
          )}

          <Typography
            variant="subtitle3"
            sx={{
              color: textColor,
              lineHeight: 1.2,
            }}
          >
            {row.label}
          </Typography>
        </Box>
      </Box>
    );
  }
);

DefaultFirstColumn.displayName = "DefaultFirstColumn";

DefaultFirstColumn.propTypes = {
  row: PropTypes.object.isRequired,
  isSelected: PropTypes.bool,
  onToggle: PropTypes.func,
  badges: PropTypes.array,
  textColor: PropTypes.string,
  checkboxColor: PropTypes.string,
};

export default DefaultFirstColumn;

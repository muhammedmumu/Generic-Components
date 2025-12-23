import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
const WidgetHeader = ({ icon, title, actions }) => {
  return (
    <Stack

      direction="row"
      alignItems="center"
      justifyContent="space-between"
      mb={2}

    >
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
          gap: 1
        }}>
        {icon}

        {typeof title === "string" &&
          <Typography variant='h6'>{title}</Typography>}

        {typeof title === "object" && (
          <Typography variant='h6'>
            {title.parts.map((part, i) => (
              <span
                key={i}
                style={{
                  color: part.color || "inherit"
                }}>
                {part.text}
              </span>
            ))}
          </Typography>)}
      </Stack>
      {actions}

    </Stack >
  )
}

export default WidgetHeader

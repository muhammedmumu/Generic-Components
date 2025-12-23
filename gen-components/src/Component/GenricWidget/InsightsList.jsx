import { Stack, Typography, Button, Divider } from "@mui/material";

const InsightsList = ({ data }) => {
  return (
    <Stack spacing={2}>
      {
        data.map((item, i) => (
          <>
            <Stack key={i} spacing={2} direction="row" alignItems="center"
              justifyContent="space-between">
              <Typography variant="body2">{item.text}</Typography>
              <Button variant="contained" size="small" sx={{
                width: "fit-content"
              }}>
                {item.actionLabel}
              </Button>
            </Stack>
            {i < data.length - 1 && <Divider />}
          </>
        ))
      }
    </Stack >
  );
};

export default InsightsList;

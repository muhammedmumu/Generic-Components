import { Stack, Button, Link, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const WidjetFooter = ({ download, viewAll, printCSV }) => {
  if (!download && !viewAll) return null;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mt={2}
    >
      {download && (
        <Button
          startIcon={download.icon}
          onClick={download.onClick}
          size="small"
        >
          {download.label}
        </Button>
      )}

      <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: 2
      }}>
        {printCSV && (
          <Button
            startIcon={printCSV.icon}
            onClick={printCSV.onClick}
            size="small"
          >
            {printCSV.label}
          </Button>
        )}

        {viewAll && (
          <Link component="button" onClick={viewAll.onClick}>
            <Box sx={{
              display: "flex",
              alignItems: "center"
            }}>
              {viewAll.label} <ArrowForwardIcon fontSize="small" />
            </Box>
          </Link>
        )
        }
      </Box>
    </Stack >
  );
};

export default WidjetFooter;

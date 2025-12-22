import React from "react";
import { TablePagination, Grid } from "@mui/material";

export default function Index({ offSet, limit, setOffSet, setLimit, rowsPerPageOptions, count }) {

  return (
    <Grid
      container
      sx={{
        " & .MuiTablePagination-root": {
          width: "100%",
        },
      }}
      mb={2}
    >
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={count || 0}
        rowsPerPage={limit}
        page={offSet}
        onPageChange={(d, newPage) => setOffSet(newPage)}
        onRowsPerPageChange={(e) => {
          setLimit(parseInt(e.target.value, 10));
          setOffSet(0);
        }}
        sx={{
          "& .MuiTablePagination-toolbar": {
            backgroundColor: "#fff",
            px: "14px",
          },
        }}
      />
    </Grid>
  );
}

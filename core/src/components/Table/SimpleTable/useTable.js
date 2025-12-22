import React, { useState } from "react";
import { Table, TableHead, TableRow, TableCell, TablePagination, TableSortLabel } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(2),
    "& thead th": {
      fontWeight: "600",
      // color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#fffbf2",
      cursor: "pointer",
    },
  },
}));

export default function useTable(records, columns, filter, onSelectAll) {
  const classes = useStyles();

  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const TblContainer = (props) => (
    <Table className={classes.table}>{props.children}</Table>
  );

  const TblHead = (props) => {
    const handleSortRequest = (cellId) => {
      const isAsc = orderBy === cellId && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(cellId);
    };

    return (
      <TableHead>
        <TableRow>
          <TableCell>
            <Checkbox
              checked={isChecked}
              onChange={() => {
                onSelectAll(isChecked);
                {
                  isChecked ? setIsChecked(false) : setIsChecked(true);
                }
              }}
            />
            Select
          </TableCell>
          {columns.map((column) => (
            <TableCell key={column.id} sortDirection={(d) => alert(d)}>
              {column.disableSorting ? (
                column.label
              ) : (
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={orderBy === column.id ? order : "asc"}
                  onClick={() => {
                    handleSortRequest(column.id);
                  }}
                >
                  {column.label}
                </TableSortLabel>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    alert(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const TblPagination = () => (
    <TablePagination
      component="div"
      page={page}
      rowsPerPageOptions={[]}
      rowsPerPage={rowsPerPage}
      count={6}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );

  function getComparator(order, orderBy) {}

  function descendingComparator() {}

  const recordsAfterPagingAndSorting = () => {};

  return {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  };
}

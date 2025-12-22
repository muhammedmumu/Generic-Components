import React, { useState } from "react";
import PeopleOutlineTwoToneIcon from "@mui/icons-material/PeopleOutlineTwoTone";
import {
  Paper,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
  Grid,
  TextField,
  InputBase,
  Box,
} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import useTable from "./useTable";
// import Controls from "./controls";
import { Search } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import {
  ContainedButton,
  TextButton,
  SuccessButton,
  DangerButton,
} from "components/button/index";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(0),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    backgroundColor: "white",
  },
  buttons: {
    marginLeft: 10,
  },
  search: {
    width: "75%",
    marginLeft: 10,
  },
}));
const Record = [];

export default function Table({ columns, data }) {
  const classes = useStyles();
  const [records, setRecords] = useState(Record);
  const [checked, setChecked] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const selectAll = (status) => {
    var checkedList = [...checked];
    if (status) {
      setChecked([]);
      return;
    }
    data.map((item) => {
      if (!checkedList.includes(item.id)) {
        checkedList.push(item.id);
      }
    });
    setChecked(checkedList);
  };
  const { TblContainer, TblHead, TblPagination } = useTable(
    records,
    columns,
    filterFn,
    selectAll
  );

  const handleChecked = (id) => {
    let itemsChecked = [...checked];
    if (itemsChecked.includes(id)) {
      let index = itemsChecked.indexOf(id);
      itemsChecked.splice(index, 1);
    } else {
      itemsChecked.push(id);
    }
    setChecked(itemsChecked);
  };

  return (
    <Grid className={classes.pageContent}>
      <Toolbar>
        <Grid container direction="row" xs={12} justifyContent="space-between">
          <Grid item xs={8}>
            Search :
            <InputBase
              label="Search Employees"
              className={classes.searchInput}
              placeholder="Search" // onChange={handleSearch}
              fullWidth
              className={classes.search}
            />
            <SuccessButton label="Search" className={classes.buttons} />
          </Grid>
          <Grid item xs={4} justifyContent="flex-end" container>
            {checked.length > 0 ? (
              <>
                <DangerButton label="Decline" className={classes.buttons} />
                <SuccessButton label="Approve" className={classes.buttons} />
                <ContainedButton label="Delete" className={classes.buttons} />
              </>
            ) : null}
          </Grid>
        </Grid>
      </Toolbar>
      <TblContainer>
        <TblHead />
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Checkbox
                  checked={checked.includes(item.id)}
                  onChange={() => handleChecked(item.id)}
                />
              </TableCell>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />
    </Grid>
  );
}

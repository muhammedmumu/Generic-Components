import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Topography from "@mui/material/Typography/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "65%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: "100%",
    // justifyContent: 'center'
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
  subHeaderList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    border: "1px solid black",
  },
  listitemContainer: {
    border: "1px solid",
    height: "30px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  listheader: {
    display: "flex",
    justifyContent: "space-between",
  },
  itemsData: {
    display: "flex",
  },
  clickableListItme: {
    color: "blue",
  },
  listSubHeader: {
    width: 220,
    justifyContent: "center",
    display: "flex",
  },
  pagination: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function PinnedSubheaderList({
  data,
  isPaged,
  handlePageClick,
}) {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {data.map((data, index) => (
        <li key={index} className={classes.listSection}>
          <ul className={classes.ul}>
            <div className={classes.subHeaderList}>
              <div className={classes.listSubHeader}>
                <ListSubheader
                  className={classes.listSubHeader}
                >{`${data.title}`}</ListSubheader>
              </div>
              <div className={classes.listSubHeader}>
                <ListSubheader
                  className={classes.listSubHeader}
                >{`${data.title2}`}</ListSubheader>
              </div>
            </div>
            {data.questions.map((item) => (
              <div className={classes.itemsData}>
                <ListItem
                  key={`item-${data.title}`}
                  className={classes.listitemContainer}
                >
                  <div>
                    <ListItemText primary={`${item.label}`} />
                  </div>
                </ListItem>
                <ListItem
                  key={`item-${data.title2}`}
                  className={classes.listitemContainer}
                >
                  <div
                    onClick={() => alert("hi")}
                    className={classes.clickableListItme}
                  >
                    <ListItemText primary={`${item.tips_count}`} />
                  </div>
                </ListItem>
              </div>
            ))}
          </ul>
        </li>
      ))}

      {isPaged ? (
        <div className={classes.pagination}>
          <Pagination count={isPaged} onChange={handlePageClick} />
        </div>
      ) : null}
    </List>
  );
}

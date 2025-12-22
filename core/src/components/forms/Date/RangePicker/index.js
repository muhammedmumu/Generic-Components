import React, { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& select": {
      width: 100,

      "& input": {
        height: 50,
        lineHeight: 1,
      },
      height: 43,
      lineHeight: 2,
      width: 119,
      marginTop: 2,
      fontWeight: 700,
    },
    maxWidth: 350,
    "& div.rdrMonthAndYearWrapper": {
      maxWidth: 350,
    },
    "& div.rdrMonthAndYearPickers .select": {
      padding: 100,
    },
  },
}));
export default function SimpleDateRangePicker(props) {
  const { selectedDateRange, selectedDate, maxDate, minDate } = props;
  const classes = useStyles();
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const [state, setState] = useState([
    {
      startDate: new Date(), // new Date(),
      endDate: new Date(), //   new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (item) => {
    setState([item.selection]);
    selectedDateRange(item);
  };

  useEffect(() => {
    const d = new Date(new Date().setFullYear(new Date().getFullYear() - 10));

    {
      selectedDate && setState([selectedDate.selection]);
    }
  }, []);

  return (
    <div>
      <DateRange
        editableDateInputs={false}
        onChange={(item) => handleSelect(item)}
        // moveRangeOnFirstSelection={false}
        ranges={state}
        className={classes.root}
        maxDate={maxDate}
        minDate={minDate} //{new Date(new Date().setFullYear(new Date().getFullYear() - 10))}
        showSelectionPreview={false}
        
        showMonthAndYearPickers={false}
        calendarFocus={false}
      />
    </div>
  );
}

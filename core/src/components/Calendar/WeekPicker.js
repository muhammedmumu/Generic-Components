import React, { useState } from "react";
import { Menu, MenuItem, Button, Typography, Grid, Box } from "@mui/material";
import { startOfWeek, isSameMonth } from "date-fns";
import { alphabetDayNames, months } from "../../constants";
import useCalendarhook from "../../hooks/calendar"
import { getMonthAndDays } from "../../utils/dateUtils";
import { IconButton } from "../button";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";


const WeekRangeCalendar = ({ onWeekChange, anchorEl, setAnchorEl, currentDate }) => {
    const { handleMonthSelect, handleYearChange, selectedMonth, selectedYear, selectedWeek, handleWeekSelect } =
        useCalendarhook({ currentMonth: currentDate, onWeekChange: onWeekChange, isWeekView: true })

    const [hoveredWeek, setHoveredWeek] = useState(null);

    const renderCalendar = () => {
        const { days, startMonth } = getMonthAndDays(selectedYear, selectedMonth)
        return (
            <Grid container spacing={0.5} sx={{ maxWidth: 350 }}>
                {alphabetDayNames.map((day, index) => (
                    <Grid item xs={1.71} key={index}>
                        <Typography align="center" variant="subtitle2">
                            {day}
                        </Typography>
                    </Grid>
                ))}
                {days.map((day, index) => {
                    const isCurrentMonth = isSameMonth(day, startMonth);
                    const weekStart = startOfWeek(day)
                    const isSelectedWeek =
                        selectedWeek &&
                        weekStart?.getTime() === selectedWeek?.start?.getTime();
                    const isHoveredWeek =
                        hoveredWeek &&
                        weekStart?.getTime() === hoveredWeek?.start?.getTime();

                    return (
                        <Grid item xs={1.71} key={index}>
                            <Button
                                fullWidth
                                onClick={() => {
                                    handleWeekSelect(weekStart)
                                    setAnchorEl(null)
                                }}
                                onMouseEnter={() => setHoveredWeek({ start: weekStart })}
                                onMouseLeave={() => setHoveredWeek(null)}
                                sx={(theme) => ({
                                    minWidth: 44,
                                    borderRadius: 0,
                                    backgroundColor: isSelectedWeek
                                        ? theme.palette.primary.main
                                        : isHoveredWeek
                                            ? theme.palette.lightBlue?.[250] || theme.palette.action.hover
                                            : "white",
                                    color: isSelectedWeek
                                        ? "white"
                                        : isCurrentMonth
                                            ? "black !important"
                                            : theme.palette.lightgrey?.[200] || theme.palette.grey[400],
                                    "&:hover": {
                                        backgroundColor: isSelectedWeek
                                            ? theme.palette.primary.main
                                            : theme.palette.lightBlue?.[250] || theme.palette.action.hover,
                                        color: isSelectedWeek ? "white !important" : "black !important",
                                    },
                                })}

                            >
                                {day.getDate()}
                            </Button>
                        </Grid>
                    );
                })}
            </Grid>
        );
    };

    return (
        <Box>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                sx={{ padding: 1, mt: 2 }}
            >
                <Grid container alignItems="center" justifyContent="space-between" padding={1}>
                    <IconButton icon={<ChevronLeft color="primary" />} onClick={() => handleYearChange(-1)} />
                    <Typography>{selectedYear}</Typography>
                    <IconButton icon={<ChevronRight color="primary" />} onClick={() => handleYearChange(1)} />
                </Grid>
                <Box display={"flex"} gap={2} sx={{ maxWidth: 550 }}>
                    <div style={{ padding: "16px" }}>{renderCalendar()}</div>
                    <Grid container sx={{ maxWidth: 200 }}>
                        {months.map((month, index) => (
                            <Grid item xs={4} key={month}>
                                <MenuItem
                                    onClick={() => {
                                        handleMonthSelect(index);
                                    }}
                                    sx={(theme) => ({
                                        "&:hover": {
                                            backgroundColor: theme.palette.lightBlue?.[250] || theme.palette.action.hover,
                                        },
                                        m: 1,
                                        px: 0,
                                        display: "flex",
                                        justifyContent: "center",
                                        backgroundColor:
                                            selectedMonth === index
                                                ? `${theme.palette.primary.main} !important`
                                                : "white",
                                        color:
                                            selectedMonth === index
                                                ? "white !important"
                                                : "black !important",
                                    })}
                                    selected={selectedMonth === index}

                                >
                                    {month}
                                </MenuItem>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Menu>
        </Box>
    );
};

export default WeekRangeCalendar;
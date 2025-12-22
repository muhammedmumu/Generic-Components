import React from "react";
import { Menu, MenuItem, Button, Typography, Grid, Box, useTheme } from "@mui/material";
import { isSameMonth } from "date-fns";
import { alphabetDayNames, months } from "../../constants";
import useCalendarhook from "../../hooks/calendar"
import { getMonthAndDays } from "../../utils/dateUtils";
import { IconButton } from "../button";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";


const DayCalendar = ({ onDayChange, anchorEl, setAnchorEl, currentDate }) => {
    const theme = useTheme()
    const { handleMonthSelect, handleYearChange, selectedMonth, selectedYear, selectedDay, handleDaySelect } =
        useCalendarhook({ currentMonth: currentDate, onDayChange: onDayChange, isDayView: true, })

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
                    const isSelectedDay =
                        selectedDay && day.getTime() === new Date(selectedDay.setHours(0, 0, 0, 0)).getTime();
                    return (
                        <Grid item xs={1.71} key={index}>
                            <Button
                                onClick={() => {
                                    handleDaySelect(day)
                                    setAnchorEl(null)
                                }}
                                sx={[{
                                    minWidth: 44
                                }, isSelectedDay ? {
                                    "&:hover": {
                                        backgroundColor: theme.palette.primary.main
                                    }
                                } : {
                                    "&:hover": {
                                        backgroundColor: theme.palette.lightBlue[250]
                                    }
                                }, isSelectedDay ? {
                                    "&:hover": {
                                        color: "white !important"
                                    }
                                } : {
                                    "&:hover": {
                                        color: "black !important"
                                    }
                                }, isSelectedDay ? {
                                    backgroundColor: theme.palette.primary.main
                                } : {
                                    backgroundColor: "white"
                                }, isSelectedDay ? {
                                    color: "white"
                                } : {
                                    color: isCurrentMonth ? "black !important" : theme.palette.lightgrey[200]
                                }]}
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
                                    sx={[theme => ({
                                        "&:hover": {
                                            backgroundColor: theme.palette.lightBlue[250]
                                        },
                                        m: 1,
                                        px: 0,
                                        display: "flex",
                                        justifyContent: "center"
                                    }), selectedMonth === index ? {
                                        backgroundColor: `${theme.palette.primary.main} !important`
                                    } : {
                                        backgroundColor: "white"
                                    }, selectedMonth === index ? {
                                        color: "white !important"
                                    } : {
                                        color: "black !important"
                                    }]}
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

export default DayCalendar;
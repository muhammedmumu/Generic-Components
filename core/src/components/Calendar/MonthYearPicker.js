import React from "react";
import { Menu, MenuItem, Typography, Grid } from "@mui/material";
import { months } from "../../constants";
import useCalendarhook from "../../hooks/calendar"
import { IconButton } from "../button";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const MonthYearPicker = ({ onMonthChange, anchorEl, setAnchorEl, currentDate }) => {
    const { handleMonthSelect, handleYearChange, selectedMonth, selectedYear } = useCalendarhook({ currentMonth: currentDate, onMonthChange: onMonthChange })

    return (
        <div>
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
                <Grid container spacing={1} sx={{ maxWidth: 200 }}>
                    {months.map((month, index) => (
                        <Grid item xs={4} key={month}>
                            <MenuItem
                                onClick={() => {
                                    handleMonthSelect(index);
                                    setAnchorEl(null)
                                }}
                                sx={(theme) => ({
                                    "&:hover": {
                                        backgroundColor: theme.palette.lightBlue[250],
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
            </Menu>
        </div>
    );
};

export default MonthYearPicker;

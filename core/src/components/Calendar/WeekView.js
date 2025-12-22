import React from "react";
import DayCell from "./DayCell";
import { Grid, Box } from "@mui/material";
import { format } from "date-fns";
import { getWeekDays } from "../../utils/dateUtils";

const WeekView = ({ currentWeek, events, EventElement, setSelectedEvent, view, selectedDate }) => {
    const { weekDays } = getWeekDays({ currentWeek: currentWeek })
    return (
        <Box sx={{ width: "100%" }}>
            <Grid container spacing={1} sx={{ pb: 1 }}>
                {weekDays?.map((date, index) => (
                    <Grid
                        item
                        xs={1.714}
                        key={index}
                    >
                        <DayCell
                            date={date}
                            events={events.filter((event) =>
                                event?.date === format(date, "yyyy-MM-dd")
                            )}
                            EventElement={EventElement}
                            setSelectedEvent={setSelectedEvent}
                            styles={{ minHeight: "700px", maxHeight: "700px", overflowY: "scroll" }}
                            view={view}
                            selectedDate={selectedDate}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default WeekView;

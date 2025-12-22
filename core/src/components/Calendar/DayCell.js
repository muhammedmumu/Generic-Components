import React from "react";
import { Box, Typography } from "@mui/material";
import { getMonthName } from "../../utils/dateUtils";
import { CalendarViews } from "../../constants";
import { isSameDay } from "date-fns";

const DayCell = ({ date, events = [], EventElement, setSelectedEvent, styles, view, selectedDate }) => {
    return (
        <Box
            sx={{
                padding: 0.5,
                backgroundColor: (theme) => isSameDay(date, selectedDate) ? `${theme.palette.primary.main}14` : "white",
                border: 1,
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                borderColor: 'divider',
                cursor: "pointer",
                ...styles
            }}
            onClick={() => setSelectedEvent && setSelectedEvent({ event: events, selectedDate: date })}
        >
            {/* Date */}
            <Typography
                variant="subtitle2"
                sx={{
                    fontWeight: "medium",
                    color: "text.secondary",
                    cursor: "pointer",
                    p: 0.5
                }}
            >
                {`${date.getDate()} ${getMonthName(date)}`}
            </Typography>

            {events?.length > 0 && (
                <Box sx={{ gap: 1, display: "flex", flexDirection: "column" }}>
                    {(view === CalendarViews.WEEK ? events : events?.slice(0, 2))?.map((event, idx) => (
                        <EventElement key={idx} event={event} />
                    ))}
                    {view === CalendarViews.MONTH && events?.length > 2 &&
                        <Box onClick={() => setSelectedEvent && setSelectedEvent({ event: events, selectedDate: date })}
                            display={"flex"} alignItems={"center"} justifyContent={"center"} sx={{
                                border: 1, p: 0.5, borderColor: 'divider', borderRadius: "4px", cursor: "pointer"
                            }}>
                            {`+${events?.length - 2}`}
                        </Box>
                    }
                </Box>
            )}
        </Box>
    );
};

export default DayCell;

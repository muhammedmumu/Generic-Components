import React from "react";
import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import { checkValidArray } from "@turner/core/src/utils/arrayUtils";

const DayView = ({ currentDate, events, EventElement, view, emptyMessage, Header, routeValues, ...compProps }) => {
    const filteredEvents = checkValidArray(events) && events?.filter((event) => event?.date === format(currentDate, "yyyy-MM-dd"))
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ border: 1, borderColor: "divider", p: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h6">
                    {format(currentDate, "dd MMM")}
                </Typography>
                <Header selectedDate={currentDate} routeValues={routeValues} />
            </Box>

            {filteredEvents.length > 0 ? (
                <Box sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1, maxHeight: 500, height: 500, overflowY: "scroll" }}>
                    {filteredEvents?.map((event, idx) => (
                        <EventElement key={idx} event={event} view={view} index={idx} routeValues={routeValues} {...compProps} />
                    ))}
                </Box>
            ) : <Box minHeight={300} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Typography variant="subtitle3" fontWeight={600} textAlign={"center"}>{emptyMessage}</Typography>
            </Box>}
        </Box>
    );
};



export default DayView;

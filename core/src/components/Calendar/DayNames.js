import { Grid, Typography } from "@mui/material"
import { format } from "date-fns";
import { CalendarViews, dayNames } from "../../constants";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function DayNames({ view, currentDate, handleNavigate }) {
    return (
        <Grid container sx={{ backgroundColor: "grey.200", paddingY: 2, textAlign: "center", width: "100%", placeItems: "center" }}>
            <Grid item xs={0.25}>
                <ChevronLeft sx={{ cursor: "pointer" }} onClick={() => handleNavigate(-1)} />
            </Grid>
            <Grid container item xs={11.5}>
                {view !== CalendarViews.DAY ? dayNames.map((day, index) => (
                    <Grid item xs={1.7} key={index} display={"flex"} justifyContent={"center"}>
                        <Typography variant="subtitle1" fontWeight={600} sx={{ color: "black !important" }}>
                            {day?.toUpperCase()}
                        </Typography>
                    </Grid>
                )) : <Grid item xs={11.5}>
                    <Typography variant="subtitle1" fontWeight={600} sx={{ color: "black !important" }}>
                        {format(currentDate, "EEEE")?.toUpperCase()}
                    </Typography>
                </Grid>}
            </Grid>
            <Grid item xs={0.25}>
                <ChevronRight sx={{ cursor: "pointer" }} onClick={() => handleNavigate(1)} />
            </Grid>
        </Grid>
    )
}
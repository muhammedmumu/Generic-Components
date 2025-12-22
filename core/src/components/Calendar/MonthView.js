import { Box, Grid } from '@mui/material';
import { format } from 'date-fns';
import DayCell from './DayCell';
import useCalendarhook from "../../hooks/calendar"

const MonthView = ({ currentMonth, events, EventElement, setSelectedEvent, view, selectedDate }) => {
    const { totalDays } = useCalendarhook({ currentMonth: currentMonth })
    return (
        <Box sx={{ width: "100%" }}>
            <Grid container sx={{ pb: 1 }}>
                {totalDays.map((date, index) => (
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
                            view={view}
                            selectedDate={selectedDate}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MonthView;

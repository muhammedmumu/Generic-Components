import { addDays, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "date-fns";
import { useCallback, useEffect, useState } from "react";

export default function useCalendarhook({ currentMonth, onMonthChange, isWeekView, onWeekChange, onDayChange, isDayView }) {
    const [totalDays, setTotalDays] = useState([])
    const [selectedMonth, setSelectedMonth] = useState(currentMonth.getMonth());
    const [selectedYear, setSelectedYear] = useState(currentMonth.getFullYear());
    const [selectedDay, setSelectedDay] = useState(new Date(currentMonth));
    const [selectedWeek, setSelectedWeek] = useState({
        start: startOfWeek(currentMonth, { weekStartsOn: 0 }),
        end: endOfWeek(currentMonth, { weekStartsOn: 0 })
    });

    const getTotalDays = () => {
        let arr = []
        let monthStart, monthEnd
        monthStart = startOfWeek(startOfMonth(currentMonth));
        monthEnd = endOfWeek(endOfMonth(currentMonth));

        let date = monthStart;

        while (date <= monthEnd) {
            arr.push(date);
            date = addDays(date, 1);
        }
        setTotalDays([...arr])
    }

    const handleMonthSelect = (month) => {
        setSelectedMonth(month);
        !isWeekView && !isDayView && handleMonthChange(month, selectedYear);
    };

    const handleYearChange = (increment) => {
        setSelectedYear(selectedYear + increment);
    };

    const handleMonthChange = (month, year) => {
        onMonthChange && onMonthChange({ month, year });
    };
    const handleWeekSelect = (startDate) => {
        const endDate = addDays(startDate, 6);
        setSelectedWeek({ start: startDate, end: endDate });
        onWeekChange && onWeekChange({ start: startDate, end: endDate });
    };

    const handleDaySelect = (day) => {
        setSelectedDay(day);
        onDayChange && onDayChange({ start: day });
    };

    useEffect(() => {
        setSelectedMonth(currentMonth.getMonth())
        setSelectedYear(currentMonth.getFullYear())
        isWeekView && setSelectedWeek({ start: startOfWeek(currentMonth, { weekStartsOn: 0 }), end: endOfWeek(currentMonth, { weekStartsOn: 0 }) })
        isDayView && setSelectedDay(new Date(currentMonth))
    }, [currentMonth, isWeekView, isDayView])

    useEffect(() => {
        getTotalDays()
    }, [currentMonth])

    return {
        totalDays,
        handleMonthSelect,
        handleMonthChange,
        handleYearChange,
        handleWeekSelect,
        handleDaySelect,
        selectedDay,
        selectedMonth,
        selectedYear,
        selectedWeek
    }
}
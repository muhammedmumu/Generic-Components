import { addDays, addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from "date-fns";
import moment from "moment";

export const getMonthName = (date) => {
    return date.toLocaleString("default", { month: "short" });
};
export const getMonthNameWithYear = (date) => {
    return date.toLocaleString("default", { month: "long", year: "numeric" });
};

export const getWeekRange = (date) => {
    const weekStart = startOfWeek(new Date(date), { weekStartsOn: 0 })
    const weekEnd = endOfWeek(new Date(date), { weekStartsOn: 0 })
    const formattedDate = `${format(weekStart, "dd MMM")} - ${format(weekEnd, "dd MMM yyyy")}`
    return formattedDate
};

export const getDayName = (date) => {
    return format(new Date(date), "dd MMM yyyy")
};

export const getWeekDays = ({ currentWeek }) => {
    const weekStart = startOfWeek(currentWeek, { weekStartsOn: 0 });
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
    return { weekDays }
}

export const getMonthAndDays = (selectedYear, selectedMonth) => {
    const startMonth = startOfMonth(new Date(selectedYear, selectedMonth));
    const endMonth = endOfMonth(new Date(selectedYear, selectedMonth));
    const days = eachDayOfInterval({ start: startOfWeek(startMonth), end: endOfWeek(endMonth) });
    return { days, startMonth }
}

export const getOverlappingMonthFirstDate = ({ firstDate, lastDate }) => {

    const startDate = new Date(firstDate).setHours(0, 0, 0, 0);
    const endDate = new Date(lastDate).setHours(0, 0, 0, 0);

    let current = startOfMonth(startDate);
    while (current <= endDate) {
        if (current >= startDate && current <= endDate) {
            return moment(current).toDate()
        }

        current = startOfMonth(addMonths(current, 1));
    }

    return null;
};




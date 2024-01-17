import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  const firstDayOfTheMonth = dayjs(new Date(dayjs().year(), month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;

  const daysMatrix = Array.from({ length: 5 }, () => {
    return Array.from({ length: 7 }, () => {
      currentMonthCount++;
      return dayjs(new Date(dayjs().year(), month, currentMonthCount));
    });
  });

  return daysMatrix;
}

import moment from "moment";

const formats = {
  sameDay: "[Сегодня]",
  nextDay: "[Вчера]",
  nextWeek: "DD.MM.YYYY",
};

export const convertOrderDate = (date: string) => {
  const day = moment().calendar(date, formats);
  const time = moment(date).format("HH:mm");
  const timeOffset = moment().utcOffset();
  return `${day}, ${time} i-GMT+${timeOffset / 60}`;
};

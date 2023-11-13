export const formatDate = (value: Date) => {
  let date = new Date(value);
  const day = date.toLocaleString("default", {day: "2-digit"});
  const month = date.toLocaleString("default", {month: "short"});
  const year = date.toLocaleString("default", {year: "numeric"});
  return day + " " + month + " " + year;
};

export const getPreviousDay = (date = new Date()) => {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - 1);

  return formatDate(previous);
};

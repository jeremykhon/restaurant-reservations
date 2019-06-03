const addDays = (date, days) => {
  const newDate = new Date(date);
  return new Date(newDate.setDate(newDate.getDate() + days));
};

export default addDays;

const addDays = (date, days) => {
  return new Date(date.setDate(date.getDate() + days));
};

export default addDays;

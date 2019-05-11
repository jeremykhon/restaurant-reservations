const hhmmTime = (t) => {
  const time = new Date (t);
  const checkTime = (i) => {
    return (i < 10) ? "0" + i : i;
  };
  const hh = checkTime(time.getHours());
  const mm = checkTime(time.getMinutes());
  return `${hh}:${mm}`;
};

export default hhmmTime;

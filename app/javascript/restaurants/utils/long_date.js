const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const longDate = (date) => {
  const d = new Date(date);
  const month = months[d.getMonth()];
  const nDate = d.getDate();
  const day = days[d.getDay()];
  const year = d.getFullYear();

  return `${day}, ${nDate} ${month} ${year}`;
};

export default longDate;

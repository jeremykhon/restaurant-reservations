const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const MmmDdYyyy = (date) => {
  const d = new Date(date);
  const month = months[d.getMonth()];
  const nDate = d.getDate();
  const year = d.getFullYear();

  return `${month} ${nDate}, ${year}`;
};

export default MmmDdYyyy;

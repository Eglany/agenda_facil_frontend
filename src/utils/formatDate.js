const formatDate = (yourDate) => {
  const offset = new Date(yourDate).getTimezoneOffset() * 60000;

  const newDate = new Date(yourDate.getTime() - offset);

  return newDate.toISOString().split('T')[0];
};

export default formatDate;

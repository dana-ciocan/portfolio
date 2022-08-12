export const getTimeOfDay = () => {
  const today = new Date();
  const currentHour = today.getHours();

  if (currentHour < 12) {
    return 'morning';
  }
  if (currentHour < 18) {
    return 'afternoon';
  }
  return 'evening';
};

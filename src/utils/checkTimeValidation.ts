export const checkTimeValidation = (date1: string, date2: string) => {
  const [hour1, min1]: number[] = date1.split(':').map((s) => Number(s));
  const [hour2, min2]: number[] = date2.split(':').map((s) => Number(s));

  if (hour2 - hour1 < 0) return false;
  if (hour2 - hour1 > 0) return true;
  if (hour2 - hour1 === 0 && min2 - min1 === 0) return false;
  if (min2 - min1 < 0) return false;

  return true;
};

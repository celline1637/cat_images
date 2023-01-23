export const getTimeList = () => {
  const time = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j <= 45; j += 15) {
      time.push(`${i.toString().padStart(2, '0')}:${j.toString().padStart(2, '0')}`);
    }
  }
  return time;
};

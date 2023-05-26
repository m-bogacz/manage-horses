const getStartDate = (day: number) => new Date(day, 0, 1);
const getEndDate = (day: number) => new Date(day + 1, 0, 1);

export const searchHorsesByCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  const startDate = getStartDate(currentYear);
  const endDate = getEndDate(currentYear);

  return { gte: startDate, lt: endDate };
};

export const searchHorsesByAge = (age: number) => {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;

  const startDate = getStartDate(birthYear);
  const endDate = getEndDate(birthYear);

  return { gte: startDate, lt: endDate };
};

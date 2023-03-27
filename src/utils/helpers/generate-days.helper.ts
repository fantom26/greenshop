export const generateDays = (n: number) => {
  const expires = new Date();

  // n days after today
  expires.setDate(expires.getDate() + n);

  return expires;
};

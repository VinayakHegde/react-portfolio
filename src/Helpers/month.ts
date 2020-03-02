export const months: string[] = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC"
];

export const monthDiff = (d1: Date, d2: Date) => {
  let diff = (d2.getFullYear() - d1.getFullYear()) * 12;
  diff = diff - d1.getMonth();
  diff = diff + d2.getMonth();
  return diff <= 0 ? 0 : diff;
};
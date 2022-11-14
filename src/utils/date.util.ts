export const addMinutes = (date: Date, minutes: number) => {
  return new Date(date.getTime() + minutes * 60000);
};

export const daysToUnix = (days: any) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: 'Africa/Lagos',
  };
  const today = new Date();
  const dateString = today.toLocaleString('en-US', options as any);
  let time = new Date(dateString);
  time.setDate(time.getDate() + days);
  return Math.floor(time.getTime() / 1000);
};

export const unixToDaysLeft = (unix: any) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: 'Africa/Lagos',
  };
  const day = new Date(unix * 1000);
  const dateString = day.toLocaleString('en-US', options as any);
  let time = new Date(dateString);
  let compare = new Date();
  const compStr = compare.toLocaleString('en-US', options as any);
  let compareDate = new Date(compStr);
  return time.getDate() - compareDate.getDate();
};

// console.log(daysToUnix(1));
// console.log(unixToDaysLeft(1668219539));

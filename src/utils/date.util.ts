export const addMinutes = (date: Date, minutes: number) => {
  return new Date(date.getTime() + minutes * 60000);
};

// export const daysToUnix = (days: any) => {
//   const options = {
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     hour12: false,
//     timeZone: 'Africa/Lagos',
//   };
//   const today = new Date();
//   const dateString = today.toLocaleString('en-US', options as any);
//   let time = new Date(dateString);
//   time.setDate(time.getDate() + days);
//   return Math.floor(time.getTime() / 1000);
// };

// export const unixToDaysLeft = (unix: any) => {
//   const options = {
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     hour12: false,
//     timeZone: 'Africa/Lagos',
//   };
//   const day = new Date(unix * 1000);
//   const dateString = day.toLocaleString('en-US', options as any);
//   let time = new Date(dateString);
//   let compare = new Date();
//   const compStr = compare.toLocaleString('en-US', options as any);
//   let compareDate = new Date(compStr);
//   return time.getDate() - compareDate.getDate();
// };

export const daysToUnix = (days: number) => {
  return new Date().setDate(new Date().getDate() + days);
};

export const unixToDaysLeft = (unix: number) => {
  const unixDaysLeft = new Date(unix).getTime() - new Date().getTime();
  return Math.ceil(unixDaysLeft / (1000 * 3600 * 24));
};

// const testDate = daysToUnix(16);
// console.log('Date: ', testDate);
// console.log('Days left: ', unixToDaysLeft(testDate));

// console.log(daysToUnix(1));
// console.log(unixToDaysLeft(1668219539));

export const timezoneToDate = (timezone: any) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: timezone, // 'Africa/Lagos',
  };
  const today = new Date();
  return today.toLocaleString('en-US', options as any);
};
// console.log(timezoneToDate('Africa/Lagos'));
// will return 12/19/2022, 1:14 PM Nigeria Time

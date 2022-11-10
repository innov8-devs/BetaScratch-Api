export const addMinutes = (date: Date, minutes: number) => {
  return new Date(date.getTime() + minutes * 60000);
};

export const unixDate = ({
  days,
  hours = 0,
}: {
  days?: number;
  hours?: number;
}): number => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timezone: 'Africa/Lagos',
  };
  const today = new Date();
  const dateString = today.toLocaleString('en-US', options as any);
  let time: any;
  if (days) {
    time = new Date(dateString);
    time.setDate((time.getDate() as number) + days);
  } else {
    time = new Date(dateString);
    time.setHours((time.getHours() as number) + hours);
  }
  return Math.floor(time.getTime() / 1000);
};

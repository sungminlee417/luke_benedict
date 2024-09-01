export const formatDateTime = (datetime: string) => {
  const date = new Date(datetime);

  // Format the date
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Format the time
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Use 12-hour clock; set to false for 24-hour clock
  });

  return `${formattedDate} · ${formattedTime}`;
};

import React from "react";

// DAYS
export const generateDays = () => {
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return days;
};

// MONTHS
export const generateMonths = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const months = monthNames.map((month, index) => (
    <option key={index} value={index + 1}>
      {month}
    </option>
  ));
  return months;
};

// YEARS
export const generateYears = () => {
  const years = [];
  for (let i = 2024; i >= 1900; i--) {
    years.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return years;
};

// HOURS
export const generateHours = () => {
  const hours = [];
  for (let i = 1; i <= 24; i++) {
    hours.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return hours;
};

// MINUTES
export const generateMinutes = () => {
  const minutes = [];
  for (let i = 0; i <= 59; i++) {
    minutes.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return minutes;
};

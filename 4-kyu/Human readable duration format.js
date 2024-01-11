// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"

// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.
// Detailed rules

// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration(seconds) {
  const date = new Date(seconds * 1000);

  function getMinutes(date) {
    const minutes = date.getMinutes();

    return minutes ? `${minutes} minute${minutes === 1 ? "" : "s"}` : "";
  }

  function getSeconds(date) {
    const sec = date.getSeconds();

    return sec ? `${sec} second${sec === 1 ? "" : "s"}` : "";
  }

  function getHours(date) {
    const hours = date.getHours();
    return hours ? `${hours} hour${hours === 1 ? "" : "s"}` : "";
  }

  function getYears() {
    const years = Math.trunc(seconds / (24 * 60 * 60 * 365));
    return years ? `${years} year${years === 1 ? "" : "s"}` : "";
  }

  function getDays() {
    const years = Math.trunc(seconds / (24 * 60 * 60 * 365));
    let days;
    if (years) {
      days = Math.trunc(seconds / (24 * 60 * 60)) - years * 365;
    } else {
      days = Math.trunc(seconds / (24 * 60 * 60));
    }
    return days ? `${days} day${days === 1 ? "" : "s"}` : "";
  }

  const days = getDays();
  const hours = getHours(date);
  const minutes = getMinutes(date);
  const sec = getSeconds(date);
  const years = getYears();

  if (years) {
    if (!sec) {
      return `${years}, ${days}, ${hours} and ${minutes}`;
    }
    return `${years}, ${days}, ${hours}, ${minutes} and ${sec}`;
  }

  if (days) {
    if (!hours && !sec) {
      return `${days} and ${minutes}`;
    }

    if (!hours) {
      return `${days}, ${minutes} and ${sec}`;
    }

    if (!minutes) {
      return `${days}, ${hours} and ${sec}`;
    }

    if (!sec) {
      return `${days}, ${hours} and ${minutes}`;
    }

    return `${days}, ${hours}, ${minutes} and ${sec}`;
  }

  if (hours) {
    return `${hours}${minutes === "" ? "" : ", " + minutes} ${
      sec === "" ? "" : "and " + sec
    }`.trim();
  }

  if (minutes) {
    return `${minutes} ${sec === "" ? "" : "and " + sec}`.trim();
  }

  if (sec) {
    return `${sec}`;
  }

  return "now";
}

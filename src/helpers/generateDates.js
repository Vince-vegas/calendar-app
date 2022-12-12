const createDate = (year, month, day) => {
  if ((year || month || day) === undefined) {
    let date = new Date();
    return date;
  }

  // if parameter not undefined
  // return this
  let date = new Date(year, month, day);
  return date;
};

const generateCurrentDate = () => {
  let dateObj = createDate();
  let year = dateObj.getFullYear();
  let month = dateObj.getMonth();
  let date = dateObj.getDate();
  let weekday = dateObj.getDay();

  return {
    current_year: year,
    current_month: month,
    current_date: date,
    current_weekday: weekday,
  };
};

const generateListsOfMonthDays = (year, month) => {
  let lists = [];

  // get last date of the month
  let lastDayOfMonth = createDate(year, month + 1, 0).getDate();
  // get starting index(weekday name)
  let startingDayIndex = createDate(year, month, 1).getDay();
  // get last index (weekday name)
  let endingDayIndex = 6 - createDate(year, month + 1, 0).getDay();

  /*
      subtract starting date in all month = 1 (default eg. Dec 1 2022)

      subtract total days of the week which is total 6 = (count from 0 to 6)
      to endingDayIndex from every current month last date
    */
  for (
    let i = 1 - startingDayIndex;
    i <= lastDayOfMonth + endingDayIndex;
    i++
  ) {
    let dateObj = createDate(year, month, i);

    lists.push({
      full_date: dateObj,
      year: dateObj.getFullYear(),
      month: dateObj.getMonth(),
      date: dateObj.getDate(),
      weekday: dateObj.getDay(),
      with_events: false,
      with_task: false,
    });
  }

  return lists;
};

export { generateCurrentDate, generateListsOfMonthDays };

const daywiseListData = {
      Sunday: null,
      Monday: [1, 5, 7, 11, 13],
      Tuesday: [2, 6, 8, 12, 14],
      Wednesday: [3, 7, 9, 13, 15],
      Thursday: [2, 4, 8, 10, 14],
      Friday: [3, 5, 9, 11, 15],
      Saturday: [1, 4, 6, 10, 12],
};

export const daywiseList = () => {
      let day = new Date().getDay();
      switch (day) {
            case 0:
                  return null;
            case 1:
                  return daywiseListData.Monday;
            case 2:
                  return daywiseListData.Tuesday;
            case 3:
                  return daywiseListData.Wednesday;
            case 4:
                  return daywiseListData.Thursday;
            case 5:
                  return daywiseListData.Friday;
            case 6:
                  return daywiseListData.Saturday;
      }
};

export const getToday = () => {
      let day = new Date().getDay();
      switch (day) {
            case 0:
                  return 'Sunday';
            case 1:
                  return 'Monday';
            case 2:
                  return 'Tuesday';
            case 3:
                  return 'Wednesday';
            case 4:
                  return 'Thursday';
            case 5:
                  return 'Friday';
            case 6:
                  return 'Saturday';
      }
};

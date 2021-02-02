// dates are constructed via (year, month, day), where month is 0-indexed
const globals = {
  registration: {
    startDate: new Date(2021, 1, 22, 20), // 8pm
    endDate: new Date(2021, 2, 19, 20), // 8pm
  },
  event: {
    startDate: new Date(2021, 3, 10),
    endDate: new Date(2021, 3, 11),
  },
};

Object.freeze(globals);

export default globals;

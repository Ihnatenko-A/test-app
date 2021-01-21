export const getShortNumber = (str: string) => { // function can be expanded to accept broader range of numbers
  const number = Number(str).toString();
  const newNumber = number.slice(0, number.length - 6); // subtract 6 last digits (millions)

  if (newNumber.length >= 4 && newNumber.length <= 6) { // check if number was billions or millions
    return `${newNumber.slice(0, newNumber.length - 3)} B`;
  }

  if (newNumber.length < 4 && newNumber.length >= 1) { // check if number is millions
    return `${newNumber.slice(0, newNumber.length - 3)} M`;
  }
};

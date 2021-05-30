import { isValid, isPast, isMatch } from 'date-fns';

import AppError from '../errors/AppError';

function checkDate(date: string): boolean | AppError {
  const dateSplitted = date.split('-');
  const dateConverted = new Date(
    Number(dateSplitted[2]),
    Number(dateSplitted[0]) - 1,
    Number(dateSplitted[1]),
  );

  const checkIfDateFormatValid = isMatch(date, 'MM-dd-yyyy');
  const checkIfDateIsValid = isValid(dateConverted);
  const isDateInPast = isPast(dateConverted);

  if (!checkIfDateFormatValid || !checkIfDateIsValid || !isDateInPast) {
    return new AppError('Date is not valid', 404);
  }

  return true;
}

export default checkDate;

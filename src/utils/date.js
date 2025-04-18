import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);
dayjs.extend(duration);

const DATE_FORMAT_POINT = 'D MMMM';
const DATE_FORMAT_EDIT_POINT = 'DD/MM/YY';
const TIME_FORMAT = 'HH:mm';

function getRandomInteger(maxLimit = 10000) {
  return Math.floor(Math.random() * maxLimit);
}

function humanizeEventDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT_POINT) : '';
}

function humanizeEventTime(dueDate) {
  return dueDate ? dayjs(dueDate).format(TIME_FORMAT) : '';
}

function localizeDateFormat(dueDate){
  return dueDate ? `${dayjs(dueDate).format(DATE_FORMAT_EDIT_POINT)} ${dayjs(dueDate).format(TIME_FORMAT)}` : '';
}

function capitalizeFirstLetter(str) {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function firstLetterToLowerCase(str) {
  if (!str || typeof str !== 'string') {
    return str; // возвращаем как есть, если не строка или пустая
  }

  return str.charAt(0).toLowerCase() + str.slice(1);
}

function formatDuration(durationObj) {
  const days = durationObj.days();
  const hours = durationObj.hours();
  const minutes = durationObj.minutes();

  if (days > 0) {
    return `${days.toString().padStart(2, '0')}D ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  } else if (hours > 0) {

    return `${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  } else {
    return `${minutes.toString().padStart(2, '0')}M`;
  }
}


function getEventTimeDuration(startTime, endTime) {
  const eventStartTime = dayjs(startTime);
  const eventEndTime = dayjs(endTime);

  const diffInMilliseconds = eventEndTime.diff(eventStartTime);
  const durationObj = dayjs.duration(diffInMilliseconds);

  const formattedDuration = formatDuration(durationObj);

  return `${formattedDuration}`;
}

function isDatePresent(dueDate){
  return dueDate && dayjs(dueDate).isSame(dayjs(), 'D');
}

function isDateFuture(dueDate){
  return dueDate && dayjs(dueDate).isAfter(dayjs(), 'D');
}

function isDatePast(dueDate){
  return dueDate && dayjs(dueDate).isBefore(dayjs(), 'D');
}
export {
  humanizeEventDate,
  getRandomInteger,
  humanizeEventTime,
  capitalizeFirstLetter,
  localizeDateFormat,
  getEventTimeDuration,
  isDatePresent,
  isDateFuture,
  firstLetterToLowerCase,
  isDatePast
};

import dayjs from 'dayjs';

export const dateHelper = dayjs;

export const setFormatDate = (date: Date | null) => dateHelper(date).format('DD/MM/YYYY');

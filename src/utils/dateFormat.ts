import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const newDateToDDMMYYYY = (date: Date): string => {
  const mm = date.getMonth() + 1; // getMonth() is zero-based
  const dd = date.getDate();

  return [(dd > 9 ? '' : '0') + dd, (mm > 9 ? '' : '0') + mm, date.getFullYear()].join('/');
};

export const newDateToYYYYMMDD = (date: Date): string => {
  const mm = date.getMonth() + 1; // getMonth() is zero-based
  const dd = date.getDate();

  return [date.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-');
};

export const newDateToHHMM = (date: Date): string => {
  const hh = date.getHours();
  const mm = date.getMinutes();

  return `${`0${hh}`.slice(-2)}h${`0${mm}`.slice(-2)}`;
};

export const newDateToTime = (date: Date): string => {
  const hh = date.getHours();
  const mm = date.getMinutes();

  return `${`0${hh}`.slice(-2)}:${`0${mm}`.slice(-2)}:00`;
};

export const brDateToUTC = (date: string): string => {
  const e = date.split('/');
  return `${e[2]}-${e[1]}-${e[0]}`;
};

export const formatDate = (date: string, mask?: string): string | Date => {
  try {
    return format(parseISO(String(date)), mask || 'dd/MM/yyyy', {
      locale: ptBR,
    });
  } catch (e) {
    console.log(date, e);
    return date;
  }
};

export const formatDateTime = (date: string | Date): string | Date => {
  try {
    return format(parseISO(String(date)), 'dd/MM/yyyy HH:mm', {
      locale: ptBR,
    });
  } catch (e) {
    console.log(date, e);
    return date;
  }
};

export const formatTime = (date: string | Date): string | Date => {
  try {
    return format(parseISO(String(date)), 'HH:mm', {
      locale: ptBR,
    });
  } catch (e) {
    console.log(date, e);
    return date;
  }
};

export const dateToUTC = (date: string | Date): string => {
  try {
    return new Date(date).toISOString();
  } catch (e) {
    console.log(date, e);
    return String(date);
  }
};

export const nowToUTC = (): string => dateToUTC(new Date());

export const getMonthName = (date: string): string =>
  format(parseISO(String(date)), 'LLL', { locale: ptBR });

export const getMonthNameFromDate = (date: Date): string => format(date, 'LLLL', { locale: ptBR });

export const getDayName = (date: string): string =>
  format(parseISO(String(date)), 'EEEE', { locale: ptBR });

export const stringTimeHHMMSSToDate = (time: string, targetDate: Date): Date => {
  const [hh, mm, ss] = time.split(':');
  const date = new Date(targetDate);
  if (!hh || !mm || !ss) return date;

  date.setHours(Number(hh));
  date.setMinutes(Number(mm));
  date.setSeconds(Number(ss));
  return date;
};

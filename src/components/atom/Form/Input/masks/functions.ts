import masks from './index';

const getOnlyNumber = (text: string): string => text.replace(/\D/g, '');
const getOnlyLetters = (text: string): string => text.replace(/[^A-Za-z]/g, '');

export const numbers = (val: string): string => getOnlyNumber(val);

export const cep = (val: string): string => {
  let value = val;

  value = getOnlyNumber(value);

  value = value.replace(/^(\d{5})(\d)/, '$1-$2');

  if (value.length > masks.cep.maxLenght) value = value.substring(0, masks.cep.maxLenght);

  return value;
};

export const currency = (val: string): string => {
  let value = val;

  value = getOnlyNumber(value);

  value = value.replace(/(\d)(\d{2})$/, '$1,$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

  return value;
};

// 000.000-000-00
export const cpf = (val: string): string => {
  let value = val;

  value = getOnlyNumber(value);

  value = value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');

  if (value.length > masks.cpf.maxLenght) value = value.substring(0, masks.cpf.maxLenght);

  return value;
};

// 00.000.000.0000
export const cnpj = (val: string): string => {
  let value = val;

  value = getOnlyNumber(value);

  value = value.replace(/(\d{2})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1/$2');
  value = value.replace(/(\d{4})(\d)/, '$1-$2');

  if (value.length > masks.cnpj.maxLenght) value = value.substring(0, masks.cnpj.maxLenght);

  return value;
};

// (00) 0000-0000
export const phone = (val: string): string => {
  let value = val;

  value = getOnlyNumber(value);

  value = value.replace(/(\d{0})(\d)/, '$1($2');
  value = value.replace(/(\d{2})(\d)/, '$1) $2');
  value = value.replace(/(\d{4})(\d)/, '$1-$2');

  if (value.length > masks.phone.maxLenght) value = value.substring(0, masks.phone.maxLenght);

  return value;
};

// (00) 00000-0000
export const cellphone = (val: string): string => {
  let value = val;

  value = getOnlyNumber(value);

  value = value.replace(/(\d{0})(\d)/, '$1($2');
  value = value.replace(/(\d{2})(\d)/, '$1) $2');
  value = value.replace(/(\d{5})(\d)/, '$1-$2');

  if (value.length > masks.cellphone.maxLenght)
    value = value.substring(0, masks.cellphone.maxLenght);

  return value;
};

// 0000.000.000000000-0
export const cardnumber = (val: string): string => {
  let value = val;

  value = getOnlyNumber(value);

  value = value.replace(/(\d{1})(\d)/, '$1 $2');
  value = value.replace(/(\d{3})(\d)/, '$1 $2');
  value = value.replace(/(\d{12})(\d)/, '$1 $2');

  if (value.length > masks.cardnumber.maxLenght)
    value = value.substring(0, masks.cardnumber.maxLenght);

  return value;
};

// 00/00/0000
export const date = (val: string): string => {
  let value = val;

  value = getOnlyNumber(value);

  value = value.replace(/(\d{2})(\d)/, '$1/$2');
  value = value.replace(/(\d{2})(\d)/, '$1/$2');

  if (value.length > masks.date.maxLenght) value = value.substring(0, masks.date.maxLenght);

  return value;
};

export const uf = (val: string): string => {
  let value = getOnlyLetters(val).toUpperCase();

  if (value.length > masks.uf.maxLenght) value = value.substring(0, masks.uf.maxLenght);

  return value;
};

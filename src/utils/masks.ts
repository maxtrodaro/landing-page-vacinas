const getOnlyNumber = (text: string): string => text.replace(/\D/g, '');

export const numbers = (val: string): string => getOnlyNumber(val);

export const cep = (val: string): string => {
  let value = val;

  value = getOnlyNumber(value);

  value = value.replace(/^(\d{5})(\d)/, '$1-$2');

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

  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{2})$/, '$1-$2');

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

  return value;
};

// (00) 0000-0000
export const phone = (val: string): string => {
  let value = val;

  value = getOnlyNumber(value);

  value = value.replace(/(\d{0})(\d)/, '$1($2');
  value = value.replace(/(\d{2})(\d)/, '$1) $2');
  value = value.replace(/(\d{4})(\d)/, '$1-$2');

  return value;
};

// (00) 00000-0000
export const cellphone = (val: string): string => {
  let value = val;

  value = getOnlyNumber(value);

  value = value.replace(/(\d{0})(\d)/, '$1($2');
  value = value.replace(/(\d{2})(\d)/, '$1) $2');
  value = value.replace(/(\d{5})(\d)/, '$1-$2');

  return value;
};

// 0000.000.000000000-0
export const cardnumber = (val: string): string => {
  let value = val;

  value = getOnlyNumber(value);

  value = value.replace(/(\d{1})(\d)/, '$1 $2');
  value = value.replace(/(\d{3})(\d)/, '$1 $2');
  value = value.replace(/(\d{12})(\d)/, '$1 $2');

  return value;
};

// 00/00/0000
export const date = (val: string): string => {
  let value = val;

  value = getOnlyNumber(value);

  value = value.replace(/(\d{2})(\d)/, '$1/$2');
  value = value.replace(/(\d{2})(\d)/, '$1/$2');

  return value;
};

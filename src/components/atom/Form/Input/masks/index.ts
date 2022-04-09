import * as masks from './functions';

const possibilities = {
  numbers: {
    middleware: masks.numbers,
  },
  date: {
    middleware: masks.date,
    maxLenght: 10,
  },
  cep: {
    middleware: masks.cep,
    maxLenght: 9,
  },
  currency: {
    middleware: masks.currency,
  },
  cpf: {
    middleware: masks.cpf,
    maxLenght: 14,
  },
  cnpj: {
    middleware: masks.cnpj,
    maxLenght: 18,
  },
  phone: {
    middleware: masks.phone,
    maxLenght: 14,
  },
  cellphone: {
    middleware: masks.cellphone,
    maxLenght: 15,
  },
  cardnumber: {
    middleware: masks.cardnumber,
    maxLenght: 22,
  },
  uf: {
    middleware: masks.uf,
    maxLenght: 2,
  },
};

export default possibilities;

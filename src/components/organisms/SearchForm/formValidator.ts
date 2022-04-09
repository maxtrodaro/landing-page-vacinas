import * as yup from 'yup';

export default yup.object({
  cepOrAddress: yup.string().when('isCurrentLocEnable', {
    is: true,
    then: (schema) => schema,
    otherwise: yup.string().required('Este campo é obrigatório.'),
  }),
});

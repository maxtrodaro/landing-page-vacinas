/* eslint-disable @typescript-eslint/no-unused-vars */

import { useField } from 'formik';

import Input from 'components/atom/Form/Input';
import { CustomInputProps } from 'components/atom/Form/Input/types';

type InputFormikProps = CustomInputProps;

const InputFormik: React.FC<InputFormikProps> = (props) => {
  const [_, meta] = useField(props);

  return <Input {...props} error={meta.touched && meta.error ? meta.error : undefined} />;
};

export default InputFormik;

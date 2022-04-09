import { useMemo } from 'react';

import { Checkbox, CheckboxProps } from '@chakra-ui/react';

import ErrorMessage from 'components/atom/ErrorMessage';

import { Container } from './styles';

interface CustomCheckboxProps extends Omit<CheckboxProps, 'onChange'> {
  hasBorder?: boolean;
  variable: string;
  value: string;
  onChange: (newValue: string) => void;
  isSmall?: boolean;
  error?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  hasBorder = false,
  error,
  value,
  variable,
  onChange,
  children,
  isSmall = false,
  ...rest
}) => {
  const isChecked = useMemo(() => variable === value, [value, variable]);

  return (
    <Container hasBorder={hasBorder} hasError={!!error} isSmall={isSmall}>
      <Checkbox isChecked={isChecked} onChange={() => onChange(value)} {...rest}>
        {children}
      </Checkbox>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default CustomCheckbox;

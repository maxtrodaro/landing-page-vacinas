import { Radio, RadioProps } from '@chakra-ui/react';

import { Container } from './styles';

interface RadioOptionProps extends RadioProps {
  isSmall?: boolean;
  colorSchema?: string;
}

const RadioOption: React.FC<RadioOptionProps> = ({
  value,
  isSmall,
  children,
  colorSchema,
  ...props
}) => (
  <Container isSmall={isSmall || false} colorSchema={colorSchema}>
    <Radio value={value} {...props}>
      {children}
    </Radio>
  </Container>
);

export default RadioOption;

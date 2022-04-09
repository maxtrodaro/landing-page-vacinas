import { useState, useCallback, useEffect } from 'react';

import { Switch, SwitchProps } from '@chakra-ui/react';

import { Container } from './styles';

interface CustomCheckboxProps extends SwitchProps {
  /* usado em situações em que o valor precisa ser atualizado via Hook e o componente do Chakra não consegue propagar a atualização */
  hasLocalStateController?: boolean;
}

const SwitchCheckbox: React.FC<CustomCheckboxProps> = ({
  children,
  hasLocalStateController = false,
  isChecked,
  onChange,
  ...rest
}) => {
  const [isLocalChecked, setLocalChecked] = useState<boolean>(isChecked || false);

  useEffect(() => {
    if (hasLocalStateController) setLocalChecked(isChecked || false);
  }, [hasLocalStateController, isChecked]);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (hasLocalStateController) {
        setLocalChecked(!isLocalChecked);
      }

      if (onChange) onChange(e);
    },
    [hasLocalStateController, isLocalChecked, onChange]
  );

  return (
    <Container className="switchbox-container">
      <Switch
        {...rest}
        isChecked={hasLocalStateController ? isLocalChecked : isChecked}
        onChange={handleOnChange}
      >
        {children}
      </Switch>
    </Container>
  );
};

export default SwitchCheckbox;

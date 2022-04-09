import React from 'react';

import { faMinus, faPlus } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, Sign, NumberLabel } from './styles';

interface Props {
  onClickMinus: () => void;
  onClickPlus?: () => void;
  min: number;
  max: number;
  quantity: number;
}

const NumberInputComponent: React.FC<Props> = ({
  quantity,
  min,
  max,
  onClickMinus,
  onClickPlus,
}) => {
  const handleClickMinus = (): void | null => {
    if (quantity === 0) {
      return null;
    }
    onClickMinus();
  };

  const handleClickPlus = (): void => {
    onClickPlus?.();
  };

  const formattedQuantity = String(quantity).padStart(2, '0');

  return (
    <Container>
      <Sign disabled={quantity === min} onClick={handleClickMinus}>
        <FontAwesomeIcon icon={faMinus} />
      </Sign>
      <NumberLabel>{formattedQuantity}</NumberLabel>
      <Sign disabled={quantity === max} onClick={handleClickPlus}>
        <FontAwesomeIcon icon={faPlus} />
      </Sign>
    </Container>
  );
};

export const NumberInput = React.memo(NumberInputComponent);

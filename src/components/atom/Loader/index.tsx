import { ReactElement, HtmlHTMLAttributes, useContext } from 'react';
import { BounceLoader } from 'react-spinners';

import { DefaultTheme, ThemeContext } from 'styled-components';

import { LoaderContainer } from './styles';

type LoaderType = {
  color?: string;
};

const Loader: React.FC<HtmlHTMLAttributes<HTMLDivElement> & LoaderType> = ({
  color,
  ...rest
}): ReactElement => {
  const theme: DefaultTheme = useContext(ThemeContext);

  return (
    <LoaderContainer {...rest}>
      <BounceLoader size={20} color={color || theme.colors.primary.color} loading />
    </LoaderContainer>
  );
};

export default Loader;

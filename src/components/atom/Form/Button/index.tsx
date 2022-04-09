/* eslint-disable react/display-name */
import React, { useMemo, forwardRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useTheme } from 'hooks/useTheme';

import Loader from 'components/atom/Loader';

import { ButtonContainer, AContainer } from './styles';
import { getTheme } from './themes';
import { IButtonDefaultProps, AProps } from './types';

const ButtonDefault = forwardRef<any, IButtonDefaultProps>(
  (
    {
      theme = 'primary',
      type = 'button',
      text,
      icon,
      iconPosition = 'left',
      fontSize = undefined,
      isLoading = false,
      isATag = false,
      target,
      rel,
      href,
      hasBorder = false,
      hasShadow = false,
      isSVGIcon,
      className,
      isBig = false,
      isSuperRounded = false,
      ...rest
    },
    ref
  ) => {
    const { theme: globalTheme } = useTheme();

    const themeProps = useMemo(() => getTheme(theme, globalTheme), [globalTheme, theme]);

    const Icon = icon;

    const Content = useMemo(
      (): React.ReactElement =>
        isLoading ? (
          <Loader color={themeProps.front} />
        ) : (
          <>
            {iconPosition === 'left' &&
              (icon && isSVGIcon ? <Icon /> : <FontAwesomeIcon icon={icon} />)}
            {text}
            {iconPosition === 'right' &&
              (icon && isSVGIcon ? <Icon /> : <FontAwesomeIcon icon={icon} />)}
          </>
        ),
      [Icon, icon, iconPosition, isLoading, isSVGIcon, text, themeProps.front]
    );

    const props = {
      fontSize,
      isIconOnly: text === undefined,
      iconPosition,
      buttonTheme: themeProps,
      className: `button button-${theme} ${className || ''}`,
    };

    const aProps: AProps = {};
    if (href) aProps.href = href;
    if (target) aProps.target = target;
    if (rel) aProps.rel = rel;

    return isATag ? (
      <AContainer
        arial-label={text}
        hasBorder={hasBorder}
        hasShadow={hasShadow}
        isBig={isBig}
        isSuperRounded={isSuperRounded}
        {...aProps}
        {...props}
        ref={ref}
      >
        {Content}
      </AContainer>
    ) : (
      <ButtonContainer
        arial-label={text}
        hasBorder={hasBorder}
        hasShadow={hasShadow}
        isBig={isBig}
        isSuperRounded={isSuperRounded}
        type={type}
        {...rest}
        {...props}
      >
        {Content}
      </ButtonContainer>
    );
  }
);

export default ButtonDefault;

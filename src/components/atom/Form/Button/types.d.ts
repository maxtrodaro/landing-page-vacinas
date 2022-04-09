import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export interface ITheme {
  front: string;
  background: string;
  borderColor?: string;
}

export interface ButtonProps {
  fontSize?: number;
  buttonTheme: ITheme;
  isIconOnly?: boolean;
  iconPosition?: 'right' | 'left';
  hasShadow?: boolean;
  hasBorder?: boolean;
  isSuperRounded?: boolean;
  isBig?: boolean;
}

export interface AContainerProps extends AnchorHTMLAttributes, ButtonProps {}

export type AvailableThemes =
  | 'primary'
  | 'secondary'
  | 'blue01'
  | 'blue02'
  | 'blue03'
  | 'orange01'
  | 'wine01'
  | 'pink01'
  | 'light'
  | 'medium'
  | 'dark'
  | 'extraDarkVariation01'
  | 'extraDarkVariation02'
  | 'danger'
  | 'warning'
  | 'white'
  | 'white-bordered'
  | 'information'
  | 'confirmation';

export type AProps = {
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export interface IButtonDefaultProps extends ButtonHTMLAttributes<HTMLButtonElement>, AProps {
  theme?: AvailableThemes;
  text?: string;
  icon?: any;
  isSVGIcon?: boolean;
  iconPosition?: 'left' | 'right';
  fontSize?: number;
  isLoading?: boolean;
  hasShadow?: boolean;
  hasBorder?: boolean;
  isSuperRounded?: boolean;
  isBig?: boolean;

  isATag?: boolean;
}

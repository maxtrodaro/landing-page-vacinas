/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useCallback, useMemo } from 'react';

import { faEye, faEyeSlash, faExclamationCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import templateLiteralToHTML from 'utils/templateLiteralToHTML';

import Error from 'components/atom/ErrorMessage';

import masks from './masks';
import {
  MainContainer,
  Container,
  Label,
  IconContainer,
  PasswordIconContainer,
  FieldRulesContainer,
  PreText,
} from './styles';
import { CustomInputProps, MaskProps } from './types';

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const {
    error,
    label = null,
    icon = false,
    type = 'text',
    disabled = false,
    fieldRules,
    preText,
    id,
    mask,
    value,
    className,
    inputClassName,
    maxLength,
    isSVGIcon,
    isWhiteBackground = false,
  } = props;

  const [inputType, setInputType] = useState<string>(type);
  const [inputOnFocus, setInputOnFocus] = useState<boolean>(false);

  const inputMask = useMemo((): MaskProps => {
    if (!mask)
      return {
        middleware: (val: string) => val,
        maxLenght: maxLength || undefined,
      };

    return masks[mask];
  }, [mask, maxLength]);

  // Filtrando propriedades que não podem ser enviadas para o <input />
  const fieldProps = useMemo(() => {
    const {
      preText: aa,
      fieldRules: bb,
      isSVGIcon: cc,
      icon: dd,
      isWhiteBackground: ee,
      ...rest
    } = props;
    return rest;
  }, [props]);

  const field = useCallback(
    () => (
      <input
        {...fieldProps}
        value={inputMask.middleware(value || '')}
        type={inputType}
        disabled={disabled}
        className={`custom-input-field ${inputClassName || ''}`}
      />
    ),
    [disabled, fieldProps, inputClassName, inputMask, inputType, value]
  );

  const Icon = icon;

  return (
    <MainContainer className={`custom-input-container ${className || ''}`}>
      {label && <Label>{label}</Label>}

      <div className="custom-input-wrapper-container">
        {error && (
          <div className="error-icon">
            <FontAwesomeIcon icon={faExclamationCircle} />
          </div>
        )}

        <Container
          hasError={error}
          htmlFor={id}
          onMouseEnter={() => setInputOnFocus(true)}
          onMouseLeave={() => setInputOnFocus(false)}
          className="custom-input"
          isWhiteBackground={isWhiteBackground}
        >
          {icon || preText ? (
            <IconContainer hasError={error}>
              <div>
                {preText ? (
                  <PreText>{preText}</PreText>
                ) : isSVGIcon ? (
                  <Icon />
                ) : (
                  <FontAwesomeIcon icon={icon} />
                )}
              </div>
              {field()}
            </IconContainer>
          ) : (
            <>{field()}</>
          )}

          {type === 'password' && (
            <PasswordIconContainer
              hasLabel={!!label}
              type="button"
              onClick={() => {
                inputType === 'password' ? setInputType('text') : setInputType('password');
              }}
            >
              <FontAwesomeIcon icon={inputType === 'password' ? faEye : faEyeSlash} />
            </PasswordIconContainer>
          )}

          {fieldRules && inputOnFocus && (
            <FieldRulesContainer hasError={error}>
              <span>{fieldRules}</span>
            </FieldRulesContainer>
          )}
        </Container>
      </div>

      {error && <Error>{templateLiteralToHTML(error)}</Error>}
    </MainContainer>
  );
};

export default CustomInput;

type MaskProps = {
  middleware: (newValue: string) => string;
  maxLenght?: number;
};

type AvailableMasks =
  | 'numbers'
  | 'date'
  | 'cep'
  | 'currency'
  | 'cpf'
  | 'cnpj'
  | 'phone'
  | 'cellphone'
  | 'cardnumber'
  | 'uf';

export interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name: string;
  value?: string;
  className?: string;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.ChangeEvent<any>) => void;
  error?: string;
  label?: string | null;
  icon?: any;
  isSVGIcon?: boolean;
  preText?: string;
  type?: string | 'password';
  disabled?: boolean;
  fieldRules?: ReactElement;
  maxLength?: number;
  mask?: AvailableMasks;
  placeholder?: string;
  autoComplete?: string;
  isWhiteBackground?: boolean;
}

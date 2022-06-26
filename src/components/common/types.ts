export interface ContainerProps {
  border?: boolean;
  marginTop?:any;
  marginBottom?:any;
  backgroundColor?:string;
  children?: React.ReactNode;

}

export interface ButtonProps {
  color?: string;
  fixedWidth?: boolean;
  name?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}

export interface InputProps {
  name: string;
  placeholder: string;
  t: any;
  type?: string;
  value?: string;
  withTitle?: boolean;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export interface validateProps {
  name: string;
  message: string;
  email: string;
}

export interface evaluationValidateProps {
  rego: string;
  state: string;
  odometer: string;
}

export interface SellCarRequestValidateProps {
  fullName: string;
  email: string;
  phone: string;
  condition: string;
}
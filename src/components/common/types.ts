export interface ContainerProps {
  id?: string;
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
  className?: string;
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

export interface SelectProps {
  name?: string;
  placeholder: string;
  t: any;
  itemList: any;
  value:string;
  objectField?:string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLOptionElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export interface TabProps {
  tabItems:any;
  tabOnChange:any;
  content:any;
  t: any;
}

export interface testDriveValidateProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  date: string;
  time: string;
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
  address:string;
  make: string;
  model: string;
  year: string;
  odometer:string;
  rego: string;
  enquiry: string;
  comments: string;
}

export interface financeValidateProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  state: string;
  description: string;
}


export interface insuranceValidateProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  state: string;
  description: string;
}

export interface serviceValidateProps {
  name: string;
  phoneNumber: string;
  email: string;
  make: string;
  model: string;
  year: string;
  cylinders:string;
  fuel:string;
  odometer:string;
}

export interface ContactValidateProps {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}
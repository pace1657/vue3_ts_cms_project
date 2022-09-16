export type IFormType = "string" | "password" | "select" | "datepicker";

export interface ISelectOption {
  title: string;
  value: any;
}

export interface IFormItem {
  filed: string;
  type: IFormType;
  label: string;
  rules?: any[];
  placeholder?: any;
  selectOptions?: ISelectOption[];
  otherOptions?: any;
  isHidden?: boolean;
}

export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  itemStyle?: any;
  colLayout?: any;
}

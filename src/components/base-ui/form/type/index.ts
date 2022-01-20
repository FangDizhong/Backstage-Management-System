type IFormType = "input" | "password" | "select" | "datepicker"

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any

  // for select
  options?: any[]

  // for others
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth: string
  itemLayout: any
  colLayout?: any
}

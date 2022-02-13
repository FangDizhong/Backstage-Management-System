import { IForm } from "@/components/base-ui/basic-form"

const pageName = "Role"

export const modalFormConfig: IForm = {
  pageName: `${pageName}`,
  pageUrlName: `${pageName}`,
  formItems: [
    {
      field: "name",
      type: "input",
      label: `${pageName} Name`,
      placeholder: `Enter ${pageName.toLowerCase()} name`
    },
    {
      field: "intro",
      type: "input",
      label: "Authority",
      placeholder: "Enter authority"
    }
  ],
  colLayout: {
    span: 24
  }
}

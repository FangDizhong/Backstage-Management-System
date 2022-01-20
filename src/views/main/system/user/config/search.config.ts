import { IForm } from "@/components/base-ui/form"

export const searchFormConfig: IForm = {
  formItems: [
    {
      type: "input",
      label: "user ID",
      placeholder: "Enter user ID"
    },
    {
      type: "input",
      label: "User Name",
      placeholder: "Enter username"
    },
    {
      type: "password",
      label: "Password",
      placeholder: "Enter password"
    },
    {
      type: "select",
      label: "Favor Sports",
      placeholder: "Choose your favor Sports",
      options: [
        { title: "basketball", value: "basketball" },
        { title: "football", value: "football" }
      ]
    },
    {
      type: "datepicker",
      label: "Date Range",
      otherOptions: {
        startPlaceholder: "Start Date",
        endPlaceholder: "End Date",
        type: "daterange"
      }
    }
  ],
  labelWidth: "120px",
  itemLayout: {
    padding: "10px 40px"
  },
  colLayout: {
    span: 8
  }
}

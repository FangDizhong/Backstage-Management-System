import { IForm } from "@/components/base-ui/basic-form"

const pageName = "Role"

export const searchFormConfig: IForm = {
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
    },
    // {
    //   field: "sports",
    //   type: "select",
    //   label: "Favor Sports",
    //   placeholder: "Choose your favor Sports",
    //   options: [
    //     { title: "basketball", value: "basketball" },
    //     { title: "football", value: "football" }
    //   ]
    // },
    {
      field: "createAt",
      type: "datepicker",
      label: "Date Range",
      otherOptions: {
        startPlaceholder: "Start Date",
        endPlaceholder: "End Date",
        type: "daterange"
      }
    }
  ],
  labelWidth: "120px"
  //   itemLayout: {
  //     padding: "10px 40px"
  //   }
  //   // colLayout: {
  //   //   // span: 8
  //   // }
}

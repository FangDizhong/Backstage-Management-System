const pageName = "Role"

export const contentTableConfig = {
  pageUrlName: `${pageName}`,
  tableTitle: `${pageName} List`,
  tableHandlerBtn: `New ${pageName}`,
  isSelectColumnShown: true,
  isIndexColumnShown: true,
  propList: [
    {
      prop: "name",
      label: `${pageName} Name`,
      minWidth: "100",
      slotName: `${pageName.toLowerCase()}Name`
    },
    {
      prop: "intro",
      label: "Authority",
      minWidth: "100",
      slotName: "authority"
    },

    {
      prop: "createAt",
      label: "Created Time",
      minWidth: "250",
      slotName: "createdTime"
    },
    {
      prop: "updateAt",
      label: "Updated Time",
      minWidth: "250",
      slotName: "updatedTime"
    },
    {
      // prop: 对应的是table内部数据的属性名
      label: "Actions",
      minWidth: "150",
      slotName: "actions"
    }
  ]
}

import { ref } from "vue"
import PageModal from "@/components/page-modal"

// 函数类型，没有返回值
type CallbackFn = (item?: any) => void

export function useModifyInPageModal(
  newDataBtnCB?: CallbackFn,
  editBtnCB?: CallbackFn
) {
  // 父组件默认信息,用来接收NewBtn和EditBtn初始数据
  const defaultInfo = ref({})
  const pageQueryInfo = ref({})
  // typeof把LoginAccount对象转成实例，InstanceType把实例转成类型
  const pageModalRef = ref<InstanceType<typeof PageModal>>()

  const handleNewDataBtnClick = (btnName: string, pageInfo: any) => {
    // New Btn don't need form Init Data
    defaultInfo.value = {}
    pageQueryInfo.value = pageInfo.value

    if (pageModalRef.value) {
      // // reset form value in page-modal (formData will also change)
      // Object.keys(pageModalRef.value.formInitData).forEach((key) => {
      //   pageModalRef.value.formInitData[key] = ""
      // })
      // set modalTitle
      pageModalRef.value.modalTitle = btnName
      // show page-modal
      pageModalRef.value.isDialogVisible = true
    }

    // 当前者没有值时返回false，当前者有值时返回后者，也就是调用newDataBtnCB()
    newDataBtnCB && newDataBtnCB()
  }

  const handleEditBtnClick = (rowData: any, btnName: string, pageInfo: any) => {
    defaultInfo.value = { ...rowData }
    pageQueryInfo.value = pageInfo.value

    if (pageModalRef.value) {
      // // page-modal表单里存在的formdata才绑定新的值  (formData will also change)
      // Object.keys(pageModalRef.value.formInitData).forEach((key) => {
      //   pageModalRef.value.formInitData[key] = rowData[key]
      //   pageModalRef.value.defaultInfo = { ...rowData }
      // })
      // set modalTitle
      pageModalRef.value.modalTitle = btnName
      // show page-modal
      pageModalRef.value.isDialogVisible = true
    }
    // 当前者没有值时返回false，当前者有值时返回后者，也就是调用editBtnCB()
    editBtnCB && editBtnCB(rowData)
  }
  // return 数组时，使用时必须按顺序取出
  // return 对象时，使用时可以只用其中一个{setOptions}=useEchart()
  return [
    pageModalRef,
    defaultInfo,
    pageQueryInfo,
    handleNewDataBtnClick,
    handleEditBtnClick
  ]
}

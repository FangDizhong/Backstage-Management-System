import { ref } from "vue"
import PageContent from "@/components/page-content"

export function useSearchPageContent() {
  // 父组件用来接收page-search传来的搜索数据
  const searchInfo = ref({})
  // typeof把LoginAccount对象转成实例，InstanceType把实例转成类型
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  async function handleResetClick() {
    const setValue = () => {
      searchInfo.value = {}
    }
    await setValue()
    pageContentRef.value?.getPageContentData()
  }

  async function handleSearchClick(formData: any) {
    const setValue = () => {
      searchInfo.value = { ...formData }
    }
    await setValue()
    // pageContentRef.value.searchInfo.value = { ...formData }
    pageContentRef.value?.getPageContentData()
  }

  const handleConfirmClick = () => {
    pageContentRef.value?.getPageContentData()
  }

  return [
    pageContentRef,
    searchInfo,
    handleResetClick,
    handleSearchClick,
    handleConfirmClick
  ]
}

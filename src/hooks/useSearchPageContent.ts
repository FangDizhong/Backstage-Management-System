import { ref } from "vue"
import PageContent from "@/components/page-content"

export function useSearchPageContent() {
  // typeof把LoginAccount对象转成实例，InstanceType把实例转成类型
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleResetClick = () => {
    pageContentRef.value?.getPageContentData()
  }
  const handleSearchClick = (searchInfo: any) => {
    pageContentRef.value?.getPageContentData(searchInfo)
  }
  return [pageContentRef, handleResetClick, handleSearchClick]
}

import { ref } from "vue"
import PageContent from "@/components/page-content"

export function useRenewPageContent() {
  // typeof把LoginAccount对象转成实例，InstanceType把实例转成类型
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleConfirmClick = () => {
    pageContentRef.value?.getPageContentData()
  }

  return [pageContentRef, handleConfirmClick]
}

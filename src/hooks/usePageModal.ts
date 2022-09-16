import { ref } from "vue";
import PageModal from "@/components/page-modal";

type CallbackFnType = (item?: any) => void;

export function usePageModal(createCallback?: CallbackFnType, editCallback?: CallbackFnType): any {
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  const initialData = ref({});
  const handleCreateClick = () => {
    initialData.value = {};
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
      pageModalRef.value.isEditPage = false;
    }
    createCallback && createCallback();
  };
  const handleEditClick = (originData: any) => {
    initialData.value = { ...originData };
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
      pageModalRef.value.isEditPage = true;
    }
    editCallback && editCallback(originData);
  };
  return [pageModalRef, initialData, handleCreateClick, handleEditClick];
}

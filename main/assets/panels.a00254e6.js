import { aJ as defineStore, aK as ref } from "./vendor.bc3132df.js";
const usePanelsStore = defineStore("panels", () => {
  const isGalleryShown = ref(false);
  const isInformationPanelShown = ref(true);
  const isPlanningViewShown = ref(false);
  const isPlanningViewAlreadyShown = ref(false);
  function toggleGallery() {
    isGalleryShown.value = !isGalleryShown.value;
  }
  function toggleInformationPanel() {
    isInformationPanelShown.value = !isInformationPanelShown.value;
  }
  return {
    isGalleryShown,
    toggleGallery,
    isInformationPanelShown,
    toggleInformationPanel,
    isPlanningViewShown,
    hasPlanningViewRendered: isPlanningViewAlreadyShown
  };
});
export {
  usePanelsStore as u
};

import { aK as defineStore, aL as ref } from "./vendor.2b7b0c4c.js";
const usePanelsStore = defineStore("panels", () => {
  const isGalleryShown = ref(true);
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

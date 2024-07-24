import { defaultStore } from "pinia";

export const useGeneralStore = defaultStore("general", {
    state: () => ({
        isPostOverlay: false,
        isCropperModal: false,
        isImageModal: null,
    }),
    persist: true,
});

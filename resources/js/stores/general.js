import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
    state: () => ({
        isPostOverlay: false,
        isCropperModal: false,
        isImageModal: null,
    }),
    persist: true,
});

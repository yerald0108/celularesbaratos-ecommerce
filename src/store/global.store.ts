import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

type SheetContent = 'cart' | 'search' | null

export interface GlobalStore {
    isSheetOpen: boolean;
    sheetContent: SheetContent;

    openSheet: (content: SheetContent) => void;
    closeSheet: () => void;
}

const storeApi: StateCreator<GlobalStore> = set => ({
    isSheetOpen: false,
    sheetContent: null,

    openSheet: content => {
        set({ isSheetOpen: true, sheetContent: content });
    },

    closeSheet: () => {
        set({ isSheetOpen: false, sheetContent: null });
    },
});

export const useGlobalStore = create<GlobalStore>()(
    devtools(storeApi)
);
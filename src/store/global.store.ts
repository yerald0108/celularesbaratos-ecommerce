import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

type SheetContent = 'cart' | 'search' | null

export interface GlobalStore {
    isSheetOpen: boolean;
    sheetContent: SheetContent;
    activeNavMobile: boolean;

    openSheet: (content: SheetContent) => void;
    closeSheet: () => void;
    setActiveMobile: (active: boolean) => void;
}

const storeApi: StateCreator<GlobalStore> = set => ({
    isSheetOpen: false,
    sheetContent: null,
    activeNavMobile: false,

    openSheet: content => {
        set({ isSheetOpen: true, sheetContent: content });
    },

    closeSheet: () => {
        set({ isSheetOpen: false, sheetContent: null });
    },
    setActiveMobile: active => {
        set({ activeNavMobile: active });
    },
});

export const useGlobalStore = create<GlobalStore>()(
    devtools(storeApi)
);
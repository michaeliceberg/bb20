import { create } from "zustand";

type RightAnswerModalState = {
    isOpen: boolean
    openR: () => void
    close: () => void

}

export const useRightAnswerModal = create<RightAnswerModalState>((set)=> ({
    isOpen: false,
    openR: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
}))
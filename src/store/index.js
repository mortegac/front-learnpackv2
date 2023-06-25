import { create } from 'zustand'


const useStore = create((set) => ({
    files: [],
    selected: {},
    setState: (value) => set((state) => ({ ...state, ...value })),
    fetchFiles: async (pond) => {
        const response = await fetch(pond)
        set({ files: await response.json() })
    },
}))

export default useStore
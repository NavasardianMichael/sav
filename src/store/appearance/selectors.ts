import { RootState } from "index";

export const selectAppearanceOptions = (state: RootState) => state.appearance
export const selectActivePage = (state: RootState) => state.appearance.activePage
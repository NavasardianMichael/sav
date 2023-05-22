import { RootState } from "index";

export const selectCategories = (state: RootState) => state.categories
export const selectTestimonialSourceIds = (state: RootState) => state.categories.testimonialSourceIds
export const selectPriceListSourceId = (state: RootState) => state.categories.priceListSourceId
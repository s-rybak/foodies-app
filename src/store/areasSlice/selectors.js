import { createSelector } from "@reduxjs/toolkit";

export const selectAreas = (state) => state.areas.items;
export const selectError = (state) => state.areas.error;
export const selectIsLoading = (state) => state.areas.isLoading;
export const selectAreasOptions = createSelector(selectAreas, (areas) =>
  areas.map(({ _id, name }) => ({ value: _id, label: name }))
);

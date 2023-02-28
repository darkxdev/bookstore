import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for categories
const initialCategoriesState = {
  categories: [],
};

// Define the categories slice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialCategoriesState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      categories: 'Under construction',
    }),
  },
});

// Export the slice actions
export const { checkStatus } = categoriesSlice.actions;

// Export the categories reducer
export default categoriesSlice.reducer;

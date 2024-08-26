import { createSlice } from '@reduxjs/toolkit';
import categoriesData from '../../components/categories.json';

const initialState = {
    xyz: categoriesData.categories,
    selectedCategoryId: 1,
};
  
  const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
      selectCategory: (state, action) => {
        state.selectedCategoryId = action.payload;
      },
      
    },
  });
  
  export const { selectCategory } = categorySlice.actions;
  export default categorySlice.reducer;
  
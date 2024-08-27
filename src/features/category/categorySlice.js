import { createSlice } from '@reduxjs/toolkit';
import categoriesData from '../../components/categories.json';

const initialState = {
    xyz: categoriesData.categories,
  selectedCategoryId: 1,
    selectedWidgetsInfo : [],
};
  
  const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
      selectCategory: (state, action) => {
        state.selectedCategoryId = action.payload;
      },
      setWidgetsInfo: (state, action) => {
        state.selectedWidgetsInfo = action.payload;


      },
    },
  });
  
  export const { selectCategory,setWidgetsInfo } = categorySlice.actions;
  export default categorySlice.reducer;
  
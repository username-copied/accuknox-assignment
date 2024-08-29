import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: {}
};

const widgetSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    replaceWidgets: (state, action) => {
      const { category, widgets } = action.payload;
      if (!state.categories[category]) {
        state.categories[category] = [];
      }
      state.categories[category] = [...state.categories[category], ...widgets];
    },
    removeWidget: (state, action) => {
      const { category, widgetId } = action.payload;
      if (state.categories[category]) {
        state.categories[category] = state.categories[category].filter(widget => widget.id !== widgetId);
        if (state.categories[category].length === 0) {
          delete state.categories[category];
        }
      }
        },
    
    addWidgets: (state, action) => {
      const { category, widgets } = action.payload;
      if (!state[category]) {
        state[category] = [];
      }
      // Filter out any widgets that already exist in the category
      const newWidgets = widgets.filter(widget => 
        !state[category].some(existingWidget => existingWidget.id === widget.id)
      );
      state[category].push(...newWidgets);
    },
    // removeWidget: (state, action) => {
    //   const { category, widgetId } = action.payload;
    //   if (state[category]) {
    //     state[category] = state[category].filter(widget => widget.id !== widgetId);
    //   }
    // },

  },
});

export const { replaceWidgets,addWidgets, removeWidget } = widgetSlice.actions;
export default widgetSlice.reducer;



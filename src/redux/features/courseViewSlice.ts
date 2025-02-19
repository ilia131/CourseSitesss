import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardView {
  isGrid: boolean;
  isList: boolean;
}

const initialState: CardView = {
  isGrid: true,  
  isList: false,
};

const cardViewSlice = createSlice({
  name: 'cardView',
  initialState,
  reducers: {
   
    setGridView: (state) => {
      state.isGrid = true;
      state.isList = false;
    },
    setListView: (state) => {
      state.isGrid = false;
      state.isList = true;
    },
  },
});

export const {setGridView, setListView } = cardViewSlice.actions;
export default cardViewSlice.reducer;

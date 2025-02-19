import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AccordionState {
    openAccordions: Record<number, boolean>; 
  }
  
  const initialState: AccordionState = {
    openAccordions: {}, 
  };
  
  const accordionSlice = createSlice({
    name: "accordion",
    initialState,
    reducers: {
      toggleAccordion: (state, action: PayloadAction<number>) => {
        const id = action.payload;
        state.openAccordions[id] = !state.openAccordions[id];
      },
    },
  });
  
  export const { toggleAccordion } = accordionSlice.actions;
  export default accordionSlice.reducer;
  

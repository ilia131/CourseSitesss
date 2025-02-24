import { createSlice } from "@reduxjs/toolkit";

interface sidebarfilter {
    isSidebarOpen: boolean
}



const initialState : sidebarfilter = {
  isSidebarOpen: false, 
};

const sidebarSlice = createSlice({
  name: "sideBarfilter",
  initialState,
  reducers: {
    setSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { setSidebar, toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;

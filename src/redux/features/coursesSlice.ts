import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FiltersState {
  check: string[];
  type: number[];
  level: number[];
  array1: string[];
  radioCheckType:string;
  radioCheckLevel:string;
  range: number[];
  isActive: boolean,
}




const initialState: FiltersState = {
  check: [],
  type: [],
  level: [],
  array1: [],
  range:[100000, 20000000],
  radioCheckType:'',
  radioCheckLevel: '',
  isActive: false, 

};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCheck: (state, action: PayloadAction<string[]>) => {
      state.check = action.payload;
    },
    setType: (state, action: PayloadAction<number[]>) => {
      state.type = action.payload;
    },
    setLevel: (state, action: PayloadAction<number[]>) => {
      state.level = action.payload;
    },
    setArray: (state, action: PayloadAction<string[]>) => {
      state.array1 = action.payload;
    },
    setRadioCheckType : (state , action: PayloadAction<string>) => {
      state.radioCheckType = action.payload
    },
    setRadioCheckLevel : (state , action: PayloadAction<string>) => {
      state.radioCheckLevel = action.payload
    },
    setRange : (state , action: PayloadAction<number[]>) => {
      state.range = action.payload
    },
    setIsActive: (state, action: PayloadAction<boolean>) => { 
      state.isActive = action.payload;
    },
    resetFilters: () => initialState
  },
  

});



export const { 
   setCheck, 
   setType, 
   setLevel, 
   setArray , 
   setRadioCheckLevel , 
   setRadioCheckType , 
   setRange , 
   setIsActive,
   resetFilters,
} = filtersSlice.actions;



export default filtersSlice.reducer;

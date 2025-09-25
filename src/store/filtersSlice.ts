import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilterType = 'all' | 'active' | 'completed';

interface FiltersState {
  status: FilterType;
}

const initialState: FiltersState = {
  status: 'all',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.status = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
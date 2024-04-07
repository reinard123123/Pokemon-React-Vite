import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {};

export const pokedexReducer = createSlice({
  name: "pokedex-reducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = pokedexReducer.actions;

export default pokedexReducer.reducer;

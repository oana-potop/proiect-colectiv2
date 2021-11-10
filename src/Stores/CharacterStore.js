import { configureStore } from "@reduxjs/toolkit";
import CharacterReducer from "../Features/characters/CharacterSlice";

export const CharacterStore = configureStore({
  reducer: {
    characterList: CharacterReducer,
  },
});


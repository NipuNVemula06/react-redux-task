import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  submenuSelected: null,
  submenuList: {
    Armoury: ["Archery", "Shooting", "Swords"],
    Aquatics: ["Swimming", "Diving", "Water Polo"],
    Cycling: ["BMX", "Mountain", "Road"],
    Equestrian: ["Show Jumping", "Dressage", "Eventing"],
    Extreme: ["Skateboarding", "Snowboarding", "Surfing"],
    Golf: ["Discgolf", "Footgolf", "Topgolf"],
    Gymnastics: ["Trampolining", "Acrobatic", "Artistic"],
    "Lake & Sea": ["Sailing", "Windsurfing", "Rowing"],
  },
};

const submenuSlice = createSlice({
  name: "submenu",
  initialState,
  reducers: {
    setSubmenuSelected: (state, action) => {
      state.submenuSelected = action.payload;
    },
  },
});

export const { setSubmenuSelected } = submenuSlice.actions;

export default submenuSlice.reducer;

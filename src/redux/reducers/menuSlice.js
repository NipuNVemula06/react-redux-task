import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuSelected: null,
  menuList: [
    {
      id: 1,
      title: "Armoury",
      icon: "gun",
    },
    {
      id: 2,
      title: "Aquatics",
      icon: "person-swimming",
    },
    {
      id: 3,
      title: "Cycling",
      icon: "bicycle",
    },
    {
      id: 4,
      title: "Equestrian",
      icon: "horse-head",
    },
    {
      id: 5,
      title: "Extreme",
      icon: "mountain",
    },
    {
      id: 6,
      title: "Golf",
      icon: "golf-ball-tee",
    },
    {
      id: 7,
      title: "Gymnastics",
      icon: "person-running",
    },
    {
      id: 8,
      title: "Lake & Sea",
      icon: "water",
    },
  ],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuSelected: (state, action) => {
      state.menuSelected = action.payload;
    },
  },
});

export const { setMenuSelected } = menuSlice.actions;

export default menuSlice.reducer;

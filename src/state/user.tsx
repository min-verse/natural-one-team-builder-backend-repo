import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
/* need to give your slice a name so that we can reference it in store.js */
  name: "user",
  /* same as setting initial state for useState this is just the initial state of our slice (Context) */
  initialState: {
    profile: {},
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.profile = { ...action.payload };
      state.isAuthenticated = true;
    },
    clearUser: (state)=>{
      state.profile={},
      state.isAuthenticated = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;

/* a slice is the same thing as a createContext

a reducer */
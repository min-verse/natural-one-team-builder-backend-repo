import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
/* need to give your slice a name so that we can reference it in store.js */
  name: "auth",
  /* same as setting initial state for useState this is just the initial state of our slice (Context) */
  initialState: {
    isAuth: false,
  },
  reducers: {
    setAuth: (state) => {
      state.isAuth = true;
    },
    clearAuth: (state)=>{
        state.isAuth=false;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;

/* a slice is the same thing as a createContext

a reducer */
import { createSlice } from "@reduxjs/toolkit";
export const partySlice = createSlice({
/* need to give your slice a name so that we can reference it in store.js */
  name: "party",
  /* same as setting initial state for useState this is just the initial state of our slice (Context) */
  initialState: {
    stats: {},
    members:[]
  },
  reducers: {
    setParty: (state, action) => {
      state.stats = { ...action.payload };
    },
    clearParty: (state)=>{
        state.stats = {};
        state.members = []
    }
  },
});

// Action creators are generated for each case reducer function
export const { setParty } = partySlice.actions;

export default partySlice.reducer;

/* a slice is the same thing as a createContext

a reducer */
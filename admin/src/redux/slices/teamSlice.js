import { createSlice } from '@reduxjs/toolkit'

export const teamSlice = createSlice({
  name: 'team',
  initialState: {
    members: [],
  },
  reducers: {
  
    setMembers: (state, action) => {
      state.members = action.payload
    },
  },
})


export const { setMembers } = teamSlice.actions

export default teamSlice.reducer
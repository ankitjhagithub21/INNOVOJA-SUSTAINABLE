import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import teamSlice from './slices/teamSlice'

export default configureStore({
  reducer: {
    auth:authSlice,
    team:teamSlice
  },
})
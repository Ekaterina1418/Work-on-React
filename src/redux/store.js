import { configureStore } from "@reduxjs/toolkit"; 
import userSlice from './users/userSlice';
import { apiSlice } from './users/apiSlice'

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
export default store
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { HTTP_STATUS } from './constants'

export const fetchUser = createAsyncThunk(
  'users/getUser',
  async (arg, {rejectWithValue}) => {
    try {
      const response = await axios.get(
         'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=al',
      )
      return response.data.items
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isSuccess: false,
    error: null,
    loading: null,
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING
    },
    [fetchUser.fulfilled]: (state, action) => {
       state.loading = HTTP_STATUS.FULFILLED
       state.users = action.payload
       state.isSuccess = true
    },
    [fetchUser.rejected]: (state, action) => {
       state.error = action.payload
       state.loading = HTTP_STATUS.REJECTED
       state.isSuccess = false
    },
  },
})
export default userSlice

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import '../../App.css'

const initialState = {
  listPost: {
    result: {
      item: []
    }
  },
  isLoading: true,
  errorMessage: ''
}

export const getDataPosts = createAsyncThunk('getpost/post', async () => {
  const response = await fetch(`${process.env.REACT_APP_API}token=${process.env.REACT_APP_TOKEN}&action=${process.env.REACT_APP_ACTION}`)
  const item = await response.json();
  return item
})

const postSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDataPosts.rejected, (state) => {
      state.errorMessage = <div className="error-bundel">خطا در برقراری ارتباط با سرور</div>
      state.isLoading = false
    })
    builder.addCase(getDataPosts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getDataPosts.fulfilled, (state, action) => {
      state.listPost = action.payload
      state.isLoading = false
    })
  }
})

export const allDataPosts = (state) => state.posts.listPost.result.item;
export const allDataIsLoading = (state) => state.posts.isLoading;
export const showErrorPosts = (state) => state.posts.errorMessage
export default postSlice.reducer;
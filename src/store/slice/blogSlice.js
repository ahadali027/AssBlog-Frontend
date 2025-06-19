import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";


export const fetchBlogs = createAsyncThunk("blogs/fetchAll", async () => {
  const response = await axiosInstance.get("/blogs");

  return response.data;
});

export const fetchBlogById = createAsyncThunk("blogs/fetchById", async (id) => {
  const response = await axiosInstance.get(`/blogs/${id}`);
  return response.data;
});

export const createBlog = createAsyncThunk("blogs/create", async (blogData, {dispatch}) => {
  const response = await axiosInstance.post("/blogs", blogData);
  await dispatch(fetchBlogs())
  return response.data;
});

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    blog: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Fetch All
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Fetch One
      .addCase(fetchBlogById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Create
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;

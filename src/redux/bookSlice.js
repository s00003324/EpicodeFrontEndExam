import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const res = await fetch('/books.json');
  const data = await res.json();
  return data;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    deleteBook(state, action) {
      const idToDelete = action.payload;
      state.list = state.list.filter((book) => book.id !== idToDelete);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'Failed to load books';
      });
  },
});

export const { deleteBook } = bookSlice.actions;
export default bookSlice.reducer;

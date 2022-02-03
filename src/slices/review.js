import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
  firstName: '',
  title: '',
  review: '',
  rating: 5,
  status: 'idle',
};

async function submitReview(formData) {
  const response = await fetch('/api/submit-review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  const result = await response.json();

  return result;
}
export const selectReviewForm = state => state.review;

export const submitReviewAsync = createAsyncThunk(
  'review/submitReview',
  async (_, { getState }) => {
    const {
      review: { firstName, rating, review, title },
    } = getState();
    const response = await submitReview({ firstName, rating, review, title });
    return response.message;
  },
);

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setFormValues: (state, action) => {
      state.firstName = action.payload.firstName;
      state.title = action.payload.title;
      state.review = action.payload.review;
      state.rating = action.payload.rating;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(submitReviewAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(submitReviewAsync.fulfilled, state => {
        state.status = 'idle';
      })
      .addCase(submitReviewAsync.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const { setFormValues } = reviewSlice.actions;

export default reviewSlice.reducer;

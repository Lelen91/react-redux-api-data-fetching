import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// function fetchSort() {
//   return function(dispatch) {
//     dispatch({type: 'FETCH_SORT_START'})
//     return fetch("").then(response => {
//       if (!response.ok) throw Error(response.statusText);
//       return response.json();
//     }).then(json => {
//       dispatch({type:'FETCH_SORT_SUCCESS', payload: json})
//     }).catch(err => dispatch({type:'FETCH_SORT_FAILURE', payload: err.message}));
//   }
// }

// 3 promises state
export const fetchSort = createAsyncThunk('sort/getSort', endpoint => {
  return fetch(endpoint)
  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
  })
  .then(json => json);
});

const sortSlice = createSlice({
    name: 'sort',
    initialState: {
      loading: false,
      error:'',
      data: []
    },
    reducers: {

    }, extraReducers: {
      [fetchSort.pending]: state => {
        state.loading = true;
      },
      [fetchSort.rejected]:(state, action) => {
        state.loading = false;
        state.error = action.error.message ;
      },
      [fetchSort.fulfilled]:(state, action) => {
        state.loading = false;
        state.data = action.payload;
      },
    }
  });

  export const sortReducer = sortSlice.reducer;
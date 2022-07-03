import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'user',
  initialState: { name: 'Yana' },
})

const stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12]
})

const addedProducts = createSlice({
  name: 'addedProducts',
  initialState: [
    { id: 0, title: 'Asparagus', price: "$5", count: 2 },
    { id: 2, title: 'Lettuce', price: "$4", count: 1 }
  ],
  reducers: {
    increaseCount(state, action) {
      state[action.payload].count++
    },
    decreaseCount(state, action) {
      if (state[action.payload].count > 0) {
        state[action.payload].count--
      }
    }
  }
})

export const { increaseCount, decreaseCount } = addedProducts.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    addedProducts: addedProducts.reducer
  },
})
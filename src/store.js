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
      const i = state.findIndex((e) => e.id === action.payload)
      state[i].count++
    },
    decreaseCount(state, action) {
      const i = state.findIndex((e) => e.id === action.payload)
      if (state[i].count > 0) {
        state[i].count--
      }
    },
    addProduct(state, action) {
      state.push(action.payload)
      console.log('state', state)
    },
    removeProduct(state, action) {
      const i = state.findIndex((e) => e.id === action.payload)
      state.splice(i, 1)
    }
  }
})

export const { increaseCount, decreaseCount, addProduct, removeProduct } = addedProducts.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    addedProducts: addedProducts.reducer
  },
})
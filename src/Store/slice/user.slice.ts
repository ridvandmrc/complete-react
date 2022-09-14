import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUser {
  id: string
  name: string
}

const initialState: IUser = { name: 'Ridvan', id: 'r-123' }

const userStore = createSlice({
  initialState: initialState,
  name: 'user',
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.id = action.payload.id
      state.name = action.payload.name
    },
  },
})

export const getUser = (state: any): IUser => state.user
export const { setUser } = userStore.actions
export default userStore.reducer

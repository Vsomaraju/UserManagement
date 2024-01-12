// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  users: any[];
  deletedAlbums: string[];
}

const initialState: UserState = {
  users: [],
  deletedAlbums: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<any[]>) => {
      state.users = action.payload;
    },
    deleteAlbum: (state, action: PayloadAction<string>) => {
      state.deletedAlbums.push(action.payload);
    },
  },
});

export const { setUsers, deleteAlbum } = userSlice.actions;
export default userSlice.reducer;

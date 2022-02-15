import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	users: [],
};

const ReduxState = createSlice({
	name: "voting",
	initialState,
	reducers: {
		userData: (state, { payload }) => {
			state.users = payload;
		},

		removingUser: (state, { payload }) => {
			state.users = state.users.filter((item) => item === payload);
		},
	},
});

export const { userData, removingUser } = ReduxState.actions;

export default ReduxState.reducer;

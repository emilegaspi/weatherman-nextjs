import { persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/es/storage'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface StoreState {
	locations: string[]
	fetchingLocations: boolean
}

const initialState: StoreState = {
	locations: [],
	fetchingLocations: false,
}

const persistConfig = {
	key: 'locations',
	storage: localStorage,
}

const locationSlice = createSlice({
	name: 'locations',
	initialState,
	reducers: {
		fetchLocations: (state) => {
			state.fetchingLocations = true
		},
		setLocations: (state, action: PayloadAction<string[]>) => {
			state.locations = action.payload
		},
	},
})

export const locationActions = locationSlice.actions
export const persistedReducer = persistReducer(persistConfig, locationSlice.reducer)

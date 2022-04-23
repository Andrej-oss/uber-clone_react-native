import { createSlice } from "@reduxjs/toolkit";

const InitialNavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null
}

export const NavSlice = createSlice({
  name: 'navigation',
  initialState: InitialNavState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  }
})

export const { setOrigin, setDestination, setTravelTimeInformation } = NavSlice.actions;

//selectors
export const originSelector = (state) => state.navigation.origin;
export const destinationSelector = (state) => state.navigation.destination;
export const travelTimeInformationSelector = (state) => state.navigation.travelTimeInformation;

export default NavSlice.reducer;
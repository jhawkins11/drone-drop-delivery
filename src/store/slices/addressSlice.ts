import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { AppState } from "../store";

const initialState = {
  firstName: "",
  lastName: "",
  address: "",
  placeID: "",
  validatedCoordinates: {
    lat: null,
    lng: null,
  },
};

const saveAddress = (address) => {
  localStorage.setItem("address", JSON.stringify(address));
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setName(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    setPlaceID(state, action) {
      state.placeID = action.payload;
    },
    setValidatedCoordinates(state, action) {
      state.validatedCoordinates.lat = action.payload.lat;
      state.validatedCoordinates.lng = action.payload.lng;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const { setName, setPlaceID, setValidatedCoordinates, setAddress } =
  addressSlice.actions;
export default addressSlice.reducer;

export const useAddressState = () =>
  useSelector((state: AppState) => state.address);

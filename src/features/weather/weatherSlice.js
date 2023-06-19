import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCoordinates, fetchWeather } from './weatherApi';


const initialState = {
  data : "",
  status:false,
  locations:{
    locations:[{address:{
    district:"",
    city:"",
    province:"",
    state:"",
    countryName:""
  },
  referencePosition:{
    latitude:"18.9401798248291",
    longitude:"72.8348388671875"
  }
},
],
  
}
};
export const fetchWeatherAsync = createAsyncThunk(
  'weather/fetchWeather',
  async ({lat,long}) => {
    const {data} = await fetchWeather(lat,long);
    return data;
  }
);
export const fetchCoordinatesAsync = createAsyncThunk(
  'weather/fetchCoordinates',
  async (city) => {
    const {data} = await fetchCoordinates(city);
    return data;
  }
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
   
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherAsync.pending, (state) => {
        state.status = false;
      })
      .addCase(fetchWeatherAsync.fulfilled, (state, action) => {
        state.status = true;
        state.data = action.payload;
      })
      .addCase(fetchCoordinatesAsync.pending, (state) => {
        state.status = false;
      })
      .addCase(fetchCoordinatesAsync.fulfilled, (state, action) => {
        state.status = true;
        state.locations = action.payload;
      });
  },
});

// export const { } = weatherSlice.actions;
export default weatherSlice.reducer;

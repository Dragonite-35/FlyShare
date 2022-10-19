import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  destination: '',
  isLoggedIn: false,
  flights: [
    {id: 1, destination: "Germany", flightName: "Delta", price: 250, votes: 0}, 
    {id: 2, destination: "Germany", flightName: "American Airlines", price: 350, votes: 0}
  ],
  // flights: [],
  // hotels: [],
  hotels: [
    {id: 1, destination: "Germany", hotelName: "Hilton", price: 250, votes: 0}, 
    {id: 2, destination: "Germany", hotelName: "Mariott", price: 350, votes: 0}
  ],
  events: [
    {id: 1, destination: "Germany", eventDetails: "Eating", price: 250, votes: 0}, 
    {id: 2, destination: "Germany", eventDetails: "Sleeping", price: 350, votes: 0},
    {id: 3, destination: "Germany", eventDetails: "Eating", price: 250, votes: 0}, 
    {id: 4, destination: "Germany", eventDetails: "Sleeping", price: 350, votes: 0},
    {id: 5, destination: "Germany", eventDetails: "Eating", price: 250, votes: 0}, 
    {id: 6, destination: "Germany", eventDetails: "Sleeping", price: 350, votes: 2},
    {id: 7, destination: "Germany", eventDetails: "Eating", price: 250, votes: 0}, 
    {id: 8, destination: "Germany", eventDetails: "Sleeping", price: 350, votes: 3},
    {id: 9, destination: "Germany", eventDetails: "Eating", price: 250, votes: 0}, 
    {id: 10, destination: "Germany", eventDetails: "Sleeping", price: 350, votes: 5},
  ],
  // events: [],
  information: '',
  price: 0,
  flightIcon: false,
  hotelIcon: false,
  eventIcon: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.count += 1
    // },
    // decrement: (state) => {
    //   state.count -= 1
    // },
    updateDestination: (state, action) => {
      state.destination = action.payload
    },
    updateVotes: (state, action) => {
      // this is where we will update state.flights
      const { id, category, voteIncrement } = action.payload;
      if (category === 'flight') {
        const ids = state.flights.map((flight) => flight.id);
        const index = ids.indexOf(Number(id))
        state.flights[index].votes += voteIncrement
        state.flights.sort((a, b) => b.votes - a.votes)
      }
      if (category === 'hotel') {
        const ids = state.hotels.map((hotel) => hotel.id);
        const index = ids.indexOf(Number(id))
        state.hotels[index].votes += voteIncrement
        state.hotels.sort((a, b) => b.votes - a.votes)
      }
      if (category === 'event') {
        const ids = state.events.map((event) => event.id);
        const index = ids.indexOf(Number(id))
        state.events[index].votes += voteIncrement
        state.events.sort((a, b) => b.votes - a.votes)
      }
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    updateFlights: (state, action) => {
      state.flights = action.payload
    },
    updateHotels: (state, action) => {
      state.hotels = action.payload
    },
    updateEvents: (state, action) => {
      state.events = action.payload
    },
    updateFlightIcon: (state, action) => {
      state.flightIcon = action.payload
    },
    updateHotelIcon: (state, action) => {
      state.hotelIcon = action.payload
    },
    updateEventIcon: (state, action) => {
      state.eventIcon = action.payload
    },
    updateInformation: (state, action) => {
      state.information = action.payload
    },
    updatePrice: (state, action) => {
      state.price = action.payload
    },
    clearIcon: (state) => {
      state.flightIcon = false;
      state.hotelIcon = false;
      state.eventIcon = false;
      state.information = '';
      state.price = 0;
    }
  },
})

export const { increment, decrement, updateDestination, updateFlights, updateHotels, updateEvents, updateFlightIcon, updateHotelIcon, updateEventIcon, updateInformation, updatePrice, clearIcon, updateVotes} = counterSlice.actions;

export default counterSlice.reducer;
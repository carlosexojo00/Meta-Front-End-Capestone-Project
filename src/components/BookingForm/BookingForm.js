import { useState } from "react";

const BookingForm = (props) => {
  const [bookingState, setBookingState] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday"
  })

  const submitReservation = (e) => {
    e.preventDefault();
    props.updtAvTimes(bookingState);
  }

  return (
    <form className="flex flex-col max-w-[200px] gap-5" onSubmit={(e) => submitReservation(e)}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={(e) => {
          setBookingState(bookingState => ({ ...bookingState, date: e.target.value }))
          props.updtAvTimes(e.target.value);
        }}
      ></input>
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        onChange={(e) => setBookingState(bookingState => ({ ...bookingState, time: e.target.value }))}
      >
        {props.avTimes.map((time, index) => {
          return <option key={index}>{time}</option>
        })}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={(e) => setBookingState(bookingState => ({ ...bookingState, guests: parseInt(e.target.value) }))}
      ></input>
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        onChange={(e) => setBookingState(bookingState => ({ ...bookingState, occasion: e.target.value }))}
      >
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation"></input>
    </form>
  )
}

export default BookingForm;
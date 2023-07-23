import { useEffect, useState } from "react";
import { submitAPI } from "../../utils/Api";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const [bookingState, setBookingState] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday"
  })

  const [isInvalidForm, setIsInvalidForm] = useState(true);

  useEffect(() => {
    if(bookingState.date !== "" && bookingState.time !== "") setIsInvalidForm(false);
  }, [bookingState])

  const navigate = useNavigate();

  const submitReservation = (e) => {
    e.preventDefault();
    try {
      const successfullCall = submitAPI(bookingState);  
      if (successfullCall) navigate("/booking/confirmed");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className="flex flex-col gap-1 w-full" onSubmit={(e) => submitReservation(e)}>
      <label htmlFor="res-date" className="text-xl">Choose date</label>
      <input
        type="date"
        id="res-date"
        className="border-2 border-black mb-4 px-4 py-2 text-xl"
        onChange={(e) => {
          setBookingState(bookingState => ({ ...bookingState, date: e.target.value }))
          props.updtAvTimes(e.target.value);
        }}
      ></input>
      <label htmlFor="res-time" className="text-xl">Choose time</label>
      <select
        id="res-time"
        className="border-2 border-black mb-4 px-4 py-2 text-xl"
        onChange={(e) => setBookingState(bookingState => ({ ...bookingState, time: e.target.value }))}
      >
        {props.avTimes.map((time, index) => {
          return <option key={index}>{time}</option>
        })}
      </select>
      <label htmlFor="guests" className="text-xl">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        className="border-2 border-black mb-4 px-4 py-2 text-xl text-black"
        onChange={(e) => setBookingState(bookingState => ({ ...bookingState, guests: parseInt(e.target.value) }))}
      ></input>
      <label htmlFor="occasion" className="text-xl">Occasion</label>
      <select
        id="occasion"
        className="border-2 border-black mb-4 px-4 py-2 text-xl"
        onChange={(e) => setBookingState(bookingState => ({ ...bookingState, occasion: e.target.value }))}
      >
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" className="bg-[#495E57] py-2 px-4 text-xl text-white disabled:opacity-40" disabled={isInvalidForm}></input>
    </form>
  )
}

export default BookingForm;
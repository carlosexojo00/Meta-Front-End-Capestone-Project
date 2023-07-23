import { useReducer } from "react";
import BookingForm from "../BookingForm/BookingForm";
import { fetchAPI } from "../../utils/Api";

const BookingPage = () => {
  const initializeTimes = () => {
    let today = new Date();
    return fetchAPI(today);
  }

  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'dateSelected':
        return fetchAPI(new Date(action.payload));
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const handleDateSelected = (date) => {
    dispatch({ type: "dateSelected", payload: date });
  }

  return (
    <>
      <ul>
        {state.map((time, index) => {
          return <li key={index}>{time}</li>
        })}
      </ul>
      <BookingForm avTimes={state} updtAvTimes={handleDateSelected}></BookingForm>
      <button onClick={() => dispatch({type: "newTimeReserved", payload: "17:00"})}>New Times</button>
    </>
  )
}

export default BookingPage
import { useReducer } from "react";
import BookingForm from "../BookingForm/BookingForm";
import { fetchAPI } from "../../utils/Api";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";

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
    <div className="min-h-screen flex flex-col items-center px-8 pb-8">
      <div className="flex flex-col justify-between items-center max-w-4xl w-full gap-8 text-center md:gap-28 p-8 md:flex-row">
          <Header />
          <Nav />
      </div>
      <div className="flex-auto flex flex-col items-center mt-20 gap-10 text-center md:text-left">
        <h1 className="text-4xl">Reserve a table at the Little Lemon Restaurant</h1>
        <BookingForm avTimes={state} updtAvTimes={handleDateSelected}></BookingForm>
      </div>
    </div>
  )
}

export default BookingPage
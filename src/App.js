import { Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage";
import BookingPage from "./components/BookingPage/BookingPage";
import ConfirmedBookingPage from "./components/ConfirmedBookingPage/ConfirmedBookingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/booking/confirmed" element={<ConfirmedBookingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

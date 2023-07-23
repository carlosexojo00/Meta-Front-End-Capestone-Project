const ConfirmedBookingPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center p-8 gap-4 max-w-md text-center bg-green-300 border-4 border-green-500 rounded-xl">
        <div className="text-4xl">✅</div>
        <h1 className="text-2xl ">You reservation has been registered succesfully!</h1>
        <p>Thank you, we hope you pass a great time in the Little Lemon Restaurant</p>
      </div>
    </div>
  )
}

export default ConfirmedBookingPage;
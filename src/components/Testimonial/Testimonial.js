const Testimonial = (props) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-xl">
      <h4 className="mb-4">{props.rating}</h4>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12">
          <img src={props.img} alt="Testimonial people" className="h-12 w-full rounded-full object-cover"/>
        </div>
        <h4>{props.name}</h4>
      </div>
      <p className="text-center text-sm">{props.review}</p>
    </div>
  )
}

export default Testimonial;
import FoodImage from "../../icons_assets/restauranfood.jpg"
import {Link} from "react-router-dom"

const HeroSection = () => {
  return (
    <div id="reservations" className="flex justify-center w-full bg-[#495E57] ">
      <div className="flex justify-between items-center max-w-4xl w-full gap-8 text-[#EDEFEE] p-8">
        <div className="max-w-sm">
          <h1 className="text-4xl text-[#F4CE14]">Little Lemon</h1>
          <h3 className="text-2xl mb-2">Chicago</h3>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur facere inventore rerum. Eius, quasi! Eum, quos quaerat, blanditiis, animi libero deserunt velit consequatur magni neque enim minima eius ex.</p>
          <Link to={"/booking"} className="bg-[#F4CE14] text-black px-4 py-2 rounded-xl" aria-label="On Click">Reserve a table</Link>
        </div>
        <img src={FoodImage} className="hidden md:block w-56 rounded-2xl" alt="LL food"></img>
      </div>
    </div>
  )
}

export default HeroSection;
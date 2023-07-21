import FoodImage from "../../icons_assets/restauranfood.jpg"

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center w-full gap-8 text-[#EDEFEE] bg-[#495E57] py-8">
      <div className="max-w-md px-4">
        <h1 className="text-4xl text-[#F4CE14]">Little Lemon</h1>
        <h3 className="text-2xl mb-2">Chicago</h3>
        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur facere inventore rerum. Eius, quasi! Eum, quos quaerat, blanditiis, animi libero deserunt velit consequatur magni neque enim minima eius ex.</p>
        <button className="bg-[#F4CE14] text-black px-4 py-2 rounded-xl">Reserve a table</button>
      </div>
      <img src={FoodImage} className="hidden md:block w-56 rounded-2xl"></img>
    </div>
  )
}

export default HeroSection;
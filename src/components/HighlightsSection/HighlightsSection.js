import HighLightsCard from "../HighlightsCard/HighlightsCard";
import GreekSalad from "../../icons_assets/greek salad.jpg"
import Bruchetta from "../../icons_assets/bruchetta.svg"
import LemonDessert from "../../icons_assets/lemon dessert.jpg"

const HighLightsSection = () => {
  const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit praesentium, sint aut rem hic itaque! Sapiente enim dolorum deleniti tenetur, aliquam illo cumque molestiae totam, dolores, fuga molestias necessitatibus!";

  return (
    <div id="menu" className="flex flex-col items-center p-8 max-w-4xl gap-12">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-3xl">This week specials!</h1>
        <button className="bg-[#F4CE14] text-black px-4 py-2 rounded-xl font-semibold">Online Menu</button>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <HighLightsCard img={GreekSalad} name="Greek Salad" price="$12.99" description={lorem}></HighLightsCard>
        <HighLightsCard img={Bruchetta} name="Bruchetta" price="$5.99" description={lorem}></HighLightsCard>
        <HighLightsCard img={LemonDessert} name="Lemon Desert" price="$5.00" description={lorem}></HighLightsCard>
      </div>
    </div>
  )
}

export default HighLightsSection;
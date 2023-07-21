import GreekSalad from "../../icons_assets/greek salad.jpg"
import Motocycle from "../../icons_assets/basket .svg"

const HighLightsCard = (props) => {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#EDEFEE] rounded-t-lg">
      <div className="w-full">
        <img src={props.img} alt="Greek Salad" className="rounded-t-lg w-full h-36 object-cover"/>
      </div>
      <div className="px-4 text-md">
        <div className="flex justify-between mt-4 mb-6">
          <h4 className="font-bold">{props.name}</h4>
          <p className="text-[#EE9972]">{props.price}</p>
        </div>
        <p className="text-sm">{props.description}</p>
        <div className="flex items-center gap-4 mt-8 mb-6">
          <p className="text-sm font-bold">Order a delivery</p>
          <img src={Motocycle} className="w-6"></img>
        </div>
      </div>
    </div>
  )
}

export default HighLightsCard;
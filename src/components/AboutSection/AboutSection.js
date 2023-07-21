import ChefsImage from "../../icons_assets/Mario and Adrian A.jpg"

const AboutSection = () => {
  return (
    <div id="about" className="flex justify-between items-center max-w-4xl w-full gap-8 p-8">
      <div className="max-w-md">
        <h1 className="text-4xl">Little Lemon</h1>
        <h3 className="text-2xl mb-2">Chicago</h3>
        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur facere inventore rerum. Eius, quasi! Eum, quos quaerat, blanditiis, animi libero deserunt velit consequatur magni neque enim minima eius ex.</p>
      </div>
      <img src={ChefsImage} className="hidden md:block w-56 rounded-2xl" alt="LL food"></img>
    </div>
  )
}

export default AboutSection;
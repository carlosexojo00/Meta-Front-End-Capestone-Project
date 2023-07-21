import Testimonial from "../Testimonial/Testimonial";
import TestimonialImage from "../../icons_assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
import TestimonialImage2 from "../../icons_assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
import TestimonialImage3 from "../../icons_assets/imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg"
import TestimonialImage4 from "../../icons_assets/soweto-graphics-GVSF6xoDvs0-unsplash (1).jpg"

const TestimonialsSection = () => {
  const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate illo explicabo corrupti, expedita quas unde excepturi qui iusto consequuntur. Ex unde aspernatur cupiditate porro atque, quidem quisquam fuga aut omnis."
  return (
    <div className="flex justify-center w-full bg-[#495E57]">
      <div className="flex flex-col items-center max-w-4xl px-8 bg-[#495E57] py-16">
        <h2 className="text-2xl mb-4 md:mb-8 text-[#F4CE14]">Testimonials</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <Testimonial rating="9/10" img={TestimonialImage} name="Matha Davis" review={lorem}></Testimonial>
            <Testimonial rating="9.3/10" img={TestimonialImage2} name="Dave Johnson" review={lorem}></Testimonial>
          </div>
          <div className="flex flex-col gap-8">
            <Testimonial rating="8.7/10" img={TestimonialImage3} name="Sean Doe" review={lorem}></Testimonial>
            <Testimonial rating="8/10" img={TestimonialImage4} name="Chris Bumstead" review={lorem}></Testimonial>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection;
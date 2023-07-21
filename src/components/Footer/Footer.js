import LLLlogo from "../../icons_assets/Logo .svg"

const Footer = () => {
  return (
    <footer className="flex justify-center bg-[#333333]">
      <div className="flex flex-col justify-between items-center md:items-start gap-8 md:flex-row max-w-4xl w-full p-8 text-sm text-white">
        <img src={LLLlogo} alt="Little Lemon Logo" className="md:self-start"/>
        <div className="text-center">
          <h4 className="mb-2">Doormat Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        <div className="text-center">
          <h4 className="mb-2">Contact</h4>
          <ul>
            <li>Adress</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="text-center">
          <h4 className="mb-2">Social Networks Links</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
import LLLlogo from "../../icons_assets/Logo .svg"

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-8 md:flex-row">
      <img src={LLLlogo} alt="Little Lemon Logo" className="md:self-start"/>
      <div className="text-center">
        <h4 className="mb-2">Doormat Navigation</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
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
    </footer>
  )
}

export default Footer;
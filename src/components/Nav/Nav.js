const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-4 md:flex-row">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#menu">MENU</a></li>
        <li><a href="#reservations">RESERVATIONS</a></li>
        <li><a href="#orderonline">ORDER ONLINE</a></li>
        <li><a href="#login">LOGIN</a></li>
      </ul>
    </nav>
  )
}

export default Nav;
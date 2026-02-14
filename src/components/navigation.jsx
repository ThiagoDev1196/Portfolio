import { useState } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

    return (

    <nav className="nav__container flex flex-col bg-white/95 text-black items-start md:items-end  fixed  w-full z-30">

          <div className="nav__image flex flex-row items-center justify-center  p-4 md:hidden">
           <button className="xl:hidden text-xl " onClick={toggleMenu} id="menu-open" aria-label="Open navegation menu">☰</button>
          </div>



        <ul className={`nav__ul ${isOpen ? 'flex-col' : 'hidden'} w-full md:flex md:flex-row md:justify-end p-3 md:text-lg`} id="nav">

          <li className="p-6 pl-4 md:p-4 font-semibold"><a onClick={toggleMenu}  className="hover:text-gray-500 transition ease-in lg:px-6 lg:py-2 lg:rounded-3xl" href="#">Home</a></li>
          <li className="p-6 pl-4 md:p-4 font-semibold"><a onClick={toggleMenu} className="hover:text-gray-500 transition ease-in lg:px-6 lg:py-2 lg:rounded-3xl" href="#projects">Projects</a></li>
          <li className="p-6 pl-4 md:p-4 font-semibold"><a onClick={toggleMenu} className="hover:text-gray-500 transition ease-in lg:px-6 lg:py-2 lg:rounded-3xl" href="#skills">Skills</a></li>
          <li className="p-6 pl-4 md:p-4 font-semibold"><a onClick={toggleMenu} className="hover:text-gray-500 transition ease-in lg:px-6 lg:py-2 lg:rounded-3xl" href="#about">About me</a></li>
          <li className="p-6 pl-4 md:p-4 font-semibold"><a onClick={toggleMenu} className="hover:text-gray-500 transition ease-in lg:px-6 lg:py-2 lg:rounded-3xl" href="#contact">Contact me</a></li>
        </ul>     
    </nav>

    )
}

export default Header
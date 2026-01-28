import { useState } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

    return (

    <nav className="nav__container flex flex-col bg-black items-start md:items-end text-white  fixed  w-full z-30">

          <div className="nav__image flex flex-row items-center justify-center  p-4 md:hidden">
           <button className="xl:hidden text-xl " onClick={toggleMenu} id="menu-open" aria-label="Open navegation menu">☰</button>
          </div>



        <ul className={`nav__ul ${isOpen ? 'flex-col' : 'hidden'} w-full md:flex md:flex-row md:justify-between p-3 md:text-lg`} id="nav">

          <div className="nav__button  md:mr-auto hidden md:flex flex-row items-center justify-center text-md ">
            <a href="" className="bg-gray-200/10 px-6 py-2 rounded-xl border-white border-2 cursor-pointer ">Hire me</a>
          </div>
          <li className="p-6 pl-4 md:p-4 font-semibold"><a onClick={toggleMenu}  className="lg:hover:text-white lg:px-6 lg:py-2 lg:rounded-3xl" href="#home">Home</a></li>
          <li className="p-6 pl-4 md:p-4 font-semibold"><a onClick={toggleMenu} className="lg:hover:text-white lg:px-6 lg:py-2 lg:rounded-3xl" href="#about">About me</a></li>
          <li className="p-6 pl-4 md:p-4 font-semibold"><a onClick={toggleMenu} className="lg:hover:text-white lg:px-6 lg:py-2 lg:rounded-3xl" href="#featured">Skills</a></li>
          <li className="p-6 pl-4 md:p-4 font-semibold"><a onClick={toggleMenu} className="lg:hover:text-white lg:px-6 lg:py-2 lg:rounded-3xl" href="#customers">Projects</a></li>
          <li className="p-6 pl-4 md:p-4 font-semibold"><a onClick={toggleMenu} className="lg:hover:text-white lg:px-6 lg:py-2 lg:rounded-3xl" href="#subscription">Contact me</a></li>
        </ul>     
    </nav>

    )
}

export default Header
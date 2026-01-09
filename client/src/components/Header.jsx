import { NavLink, useNavigate} from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import { useState, useEffect} from "react";

function Header ({ onScrollToEvents, onScrollToServices, scrollTop}) {
const navigate = useNavigate();
const  [mobileNavOpen, setMobileNavOpen] =  useState(false);

useEffect(() => {
    mobileNavOpen && setMobileNavOpen(false);
}, [scrollTop]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-primary border-b transition-all transition-200 border-gray-200`}>
          <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="layout-content-container flex flex-col md:flex-row gap-4 w-full max-w-[1200px] items-center justify-between py-4">
          <div className="flex items-center gap-4 text-slate-900" onClick={
           () => {navigate("/")}
          }>
              <div className="size-8 text-primary">
                  <img src={Logo} alt="D Wave Entertainment Logo" className="w-full h-full object-contain"/>
              </div>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
              <div className="flex items-center gap-9">
                  <a className="text-sm text-white font-medium transition-colors" onClick={() => onScrollToEvents()}>Upcoming Events</a>
                  <NavLink className="text-sm text-white font-medium transition-colors" to="/about-us">About Us</NavLink>
                  <a className="text-sm text-white font-medium transition-colors" onClick={() => onScrollToServices()}>Services</a>
                  <NavLink className="text-sm text-white font-medium transition-colors" to="/contact">Contact</NavLink>
              </div>
              {/* <button className="bg-primary hover:bg-primary/90 transition-all text-white text-sm font-bold h-10 px-6 rounded-lg shadow-[0_0_20px_rgba(40,24,40,0.4)] hover:shadow-[0_0_30px_rgba(40,24,40,0.6)]">
                                        Book Now
              </button> */}
          </div>
          {/* <!-- Mobile Menu Icon --> */}
          <div className={` text-white md:hidden transition-all transition-200 text-bold`}>
          <span className="material-symbols-outlined" onClick={ () => {
            setMobileNavOpen(!mobileNavOpen)
          } 
          }>
            menu
          </span>
          </div>
          </div>
          </div>
          </div>
          {/* {Mobile Nav} */}
          <nav className={`${mobileNavOpen ? 'opacity-1 h-[170px]' : 'opacity-1 h-[0px]'}  md:hidden w-full bg-white absolute top-[110.9px] text-primary font-medium transition-all duration-250 flex`}>
            <ul className={`${mobileNavOpen ? "" : "h-[0px]"} flex flex-col items-center gap-2 m-auto`}>
              <li className={`${mobileNavOpen ? "" : "translate-y-[-30px] opacity-0"} transition-all duration-200`}><a onClick={ () => mobileNavOpen && onScrollToEvents()}>Upcoming Events</a></li>
              <li className={`${mobileNavOpen ? "" : "translate-y-[-60px] opacity-0"} transition-all duration-200`}><NavLink to={mobileNavOpen && "/about-us"}>About Us</NavLink></li>
              <li className={`${mobileNavOpen ? "" : "translate-y-[-90px] opacity-0"} transition-all duration-200`}><a onClick={() => mobileNavOpen && onScrollToEvents()}>Services</a></li>
              <li className={`${mobileNavOpen ? "" : "translate-y-[-120px] opacity-0"} transition-all duration-200`}><NavLink to={mobileNavOpen && "/contact"}>Contact</NavLink></li>
            </ul>
          </nav>
      </nav>
    </>
  )
}

export default Header
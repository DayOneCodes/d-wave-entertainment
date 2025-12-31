import { NavLink, useNavigate} from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import { useState, useEffect  } from "react";

function Header ({ onScrollToEvents, onScrollToServices, scrollTop}) {
  const navigate = useNavigate();
const  [mobileNavOpen, setMobileNavOpen] =  useState(false);

useEffect(() => {
  if  (scrollTop) {
    mobileNavOpen && setMobileNavOpen(false);
    console.log("WORKING");
  }
}, [scrollTop]);


  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background-light/80 border-b border-gray-200 dark:border-white/10">
          <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="layout-content-container flex flex-col md:flex-row gap-4 w-full max-w-[1200px] items-center justify-between py-4">
          <div className="flex items-center gap-4 text-slate-900 dark:text-white" onClick={
           () => {navigate("/")}
          }>
              <div className="size-8 text-primary">
                  <img src={Logo} alt="D Wave Entertainment Logo" className="w-full h-full object-contain"/>
              </div>

          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
              <div className="flex items-center gap-9">
                  <a className="text-sm font-medium hover:text-primary transition-colors" onClick={() => onScrollToEvents()}>Upcoming Events</a>
                  <NavLink className="text-sm font-medium hover:text-primary transition-colors" to="/about-us">About Us</NavLink>
                  <a className="text-sm font-medium hover:text-primary transition-colors" onClick={() => onScrollToServices()}>Services</a>
                  <NavLink className="text-sm font-medium hover:text-primary transition-colors" to="/contact">Contact</NavLink>
              </div>
              <button className="bg-primary hover:bg-primary/90 transition-all text-white text-sm font-bold h-10 px-6 rounded-lg shadow-[0_0_20px_rgba(0,112,242,0.4)] hover:shadow-[0_0_30px_rgba(0,112,242,0.6)]">
                                        Book Now
              </button>
          </div>

          {/* <!-- Mobile Menu Icon --> */}
          <div className="md:hidden text-primary text-bold">
          <span className="material-symbols-outlined" onClick={ () => {
            setMobileNavOpen(!mobileNavOpen)
          } 
          }>menu</span>
          </div>
          </div>
          </div>
          </div>

          {/* {Mobile Nav} */}
          <nav className={`${mobileNavOpen ? 'opacity-1' : 'opacity-0'}  md:hidden w-full bg-white h-[170px] absolute top-[110.9px] text-primary font-medium transition-all duration-300 flex`}>
            <ul className="flex flex-col items-center gap-2 m-auto">
              <li><a onClick={() => onScrollToEvents()}>Upcoming Events</a></li>
              <li><NavLink to="/about-us">About Us</NavLink></li>
              <li><a onClick={() => onScrollToServices()}>Services</a></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
      </nav>

    </>
  )
}

export default Header